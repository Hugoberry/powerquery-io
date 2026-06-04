---
title: Function.ScalarVector
---

# Function.ScalarVector


Membuat fungsi skalar di atas fungsi vektor, mengelompokkan beberapa invokasi.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Menghasilkan fungsi skalar tipe `scalarFunctionType` yang menggunakan `vectorFunction` dengan baris tunggal argumen dan menghasilkan output tunggal. Selain itu, ketika fungsi skalar berulang kali diterapkan untuk setiap baris pada tabel input, seperti di Table.AddColumn, sebagai gantinya `vectorFunction` akan diterapkan sekali untuk semua input.

`vectorFunction` akan diberikan tabel yang kolomnya cocok dengan nama dan posisi parameter `scalarFunctionType`. Setiap baris pada tabel ini berisi argumen untuk satu panggilan ke fungsi skalar, dengan kolom yang sesuai dengan parameter `scalarFunctionType`.

`vectorFunction` harus menghasilkan daftar dengan panjang yang sama seperti tabel input, dengan item di setiap posisi harus merupakan hasil yang sama seperti mengevaluasi fungsi skalar pada baris input pada posisi yang sama.

Tabel input diharapkan akan dialirkan, jadi `vectorFunction` diharapkan untuk mengalirkan output-nya saat input masuk, hanya bekerja dengan satu gugus input pada satu waktu. Secara khusus, `vectorFunction` tidak harus menghitung tabel input-nya lebih dari sekali.


## Examples

### Example #1
Kalikan dua kolom pada tabel input dengan memproses data dalam batch berisi 100 item.
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
Hitung skor pengujian dalam batch berisi dua item, dan isi bidang ID batch yang dapat digunakan untuk memverifikasi bahwa proses batching berjalan sesuai harapan.
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
