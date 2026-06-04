---
title: Function.ScalarVector
---

# Function.ScalarVector


Mencipta fungsi skalar di atas fungsi vektor, menggabungkan pelbagai doa.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Mengembalikan fungsi skalar jenis `scalarFunctionType` yang memanggil `vectorFunction` ​​dengan satu baris argumen dan mengembalikan output tunggalnya. Selain itu, apabila fungsi skalar digunakan berulang kali untuk setiap baris jadual input, seperti dalam Table.AddColumn, `vectorFunction` akan digunakan sekali untuk semua input.

`vectorFunction` akan diberikan jadual yang lajurnya sepadan dengan nama dan kedudukan parameter `scalarFunctionType`. Setiap baris jadual ini mengandungi argumen untuk satu panggilan ke fungsi skalar, dengan lajur yang sepadan dengan parameter `scalarFunctionType`.

`vectorFunction` mesti mengembalikan senarai yang panjangnya sama dengan jadual input, itemnya pada setiap kedudukan mestilah hasil yang sama seperti menilai fungsi skalar pada baris input kedudukan yang sama.

Jadual input dijangka akan distrim masuk, maka `vectorFunction` dijangka akan menstrim outputnya apabila input masuk, hanya mengendalikan satu ketulan input pada satu-satu masa. Secara khususnya, `vectorFunction` tidak boleh mengangkakan jadual inputnya lebih daripada sekali.


## Examples

### Example #1
Darabkan dua lajur jadual input dengan memproses input dalam kelompok 100.
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
Kira skor ujian dalam kelompok dua, dan isikan medan ID kelompok yang boleh digunakan untuk mengesahkan bahawa pengelompokan berfungsi seperti yang dijangkakan.
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
