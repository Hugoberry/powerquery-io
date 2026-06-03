---
title: Function.ScalarVector
---

# Function.ScalarVector


Vektör işlevin üzerinde skaler bir işlev oluşturarak birden fazla çağrı grubu oluşturur.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Tek sıra bağımsız değişkenler ile `vectorFunction` çağıran ve bunun tekli çıkışını döndüren `scalarFunctionType` türü bir skaler işlev döndürür. Buna ek olarak, bir skaler işlev Table.AddColumn gibi bir giriş tablosunda tekrar tekrar uygulandığında tüm girişlerin yerine bir kez `vectorFunction` uygulanır.

Sütunlarının adları eşleşen ve `scalarFunctionType` parametrelerini konumlandıran bir tablo, `vectorFunction` öğesine geçirilir. Bu tablodaki her bir satır, skaler işleve bir çağrı için bağımsız değişkenler barındırır ve sütunlar `scalarFunctionType` parametrelerine karşılık gelir.

`vectorFunction`, giriş tablosuyla aynı uzunlukta olan bir liste döndürmelidir. Bu listede tüm konumlardaki öğeler, giriş tablosunda aynı konumda bulunan satırın skaler işlevinin değerlendirme sonucuna karşılık gelmelidir.

Giriş tablosunun akışla içeri aktarılması beklenir, bu nedenle `vectorFunction` öğesinin de tek seferde yalnızca bir giriş öbeğiyle çalışarak giriş akışla aktarıldıkça çıkışını akışla aktarması beklenir. `vectorFunction` öğesinin giriş tablosunu bir kereden fazla sıralamaması özellikle önemlidir.


## Examples

### Example #1
Girişleri 100'lük gruplar halinde işleyerek girdi tablosunun iki sütununu çarpın.
```powerquery
let
    Compute.ScoreScalar = (left, right) => left * right,
    // When Function.ScalarVector batching kicks in, we'll receive all
    // of the inputs for the entire table here at once.
    Compute.ScoreVector = (input) => let
        chunks = Table.Split(input, 100),
        scoreChunk = (chunk) => Table.TransformRows(chunk, each Compute.ScoreScalar([left], [right]))
      in
        List.Combine(List.Transform(chunks, scoreChunk)),
    Compute.Score = Function.ScalarVector(type function (left as number, right as number) as number, Compute.ScoreVector),
    Final = Table.AddColumn(
        Table.FromRecords({
            [a = 1, b = 2],
            [a = 3, b = 4]
        }),
        "Result",
        each Compute.Score([a], [b])
    )
in
    Final
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, Result = 2],
    [a = 3, b = 4, Result = 12]
})
```


### Example #2
Test puanlarını ikişerli gruplar halinde hesaplayın ve gruplamanın beklendiği gibi çalıştığını doğrulamak için kullanılabilecek bir grup kimliği alanı doldurun.
```powerquery
let
  _GradeTest = (right, total) => Number.Round(right / total, 2),
  _GradeTests = (inputs as table) as list => let
    batches = Table.Split(inputs, 2),
    gradeBatch = (batch as table) as list =>
      let
        batchId = Text.NewGuid()
      in
        Table.TransformRows(batch, each [Grade = _GradeTest([right], [total]), BatchId = batchId])
  in
    List.Combine(List.Transform(batches, gradeBatch)),
  GradeTest = Function.ScalarVector(type function (right as number, total as number) as number, _GradeTests),
  Tests = #table(type table [Test Name = text, Right = number, Total = number],
    {
      {"Quiz 1", 3, 4},
      {"Test 1", 17, 22},
      {"Quiz 2", 10, 10}
    }),
  // To break batching, replace [Right] with {[Right]}{0}.
  TestsWithGrades = Table.AddColumn(Tests, "Grade Info", each GradeTest([Right], [Total]), type record),
  // To verify batching, also expand BatchId.
  Final = Table.ExpandRecordColumn(TestsWithGrades, "Grade Info", {"Grade"})
in
  Final
```

Result: 
```powerquery
#table(
    type table [Test Name = text, Right = number, Total = number, Grade = number],
    {
      {"Quiz 1", 3, 4, 0.75},
      {"Test 1", 17, 22, 0.77},
      {"Quiz 2", 10, 10, 1}
    }
)
```




## Category
Function
