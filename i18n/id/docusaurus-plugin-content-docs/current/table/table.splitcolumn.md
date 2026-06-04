---
title: Table.SplitColumn
---

# Table.SplitColumn


Memisahkan kolom yang ditentukan menjadi kumpulan kolom tambahan menggunakan fungsi pemisah yang ditentukan.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

Memisahkan kolom yang ditentukan menjadi kumpulan kolom tambahan menggunakan fungsi pemisah yang ditentukan.

-   `table`: Tabel yang berisi kolom yang akan dibagi.
-   `sourceColumn`: Nama kolom yang akan dipisahkan.
-   `splitter`: Fungsi pemisah yang digunakan untuk memisahkan kolom (misalnya, `Splitter.SplitTextByDelimiter` atau `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: Daftar nama kolom baru yang akan dibuat, atau jumlah kolom baru.
-   `default`: Menimpa nilai yang digunakan jika nilai yang dipisahkan tidak cukup untuk mengisi semua kolom baru. Default untuk parameter ini adalah `null`.
-   `extraColumns`: Menentukan apa yang harus dilakukan jika mungkin ada lebih banyak nilai terpisah daripada jumlah kolom baru. Anda dapat meneruskan nilai enumerasi `ExtraValues.Type` ke parameter ini. Defaultnya adalah `ExtraValues.Ignore`.


## Examples

### Example #1
Memisahkan kolom nama menjadi nama depan dan nama belakang.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
Memisahkan kolom nama menjadi nama depan dan nama belakang, lalu mengganti nama kolom baru.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
Memisahkan kolom nama menjadi nama depan dan nama belakang, mengganti nama kolom baru, dan mengisi kolom kosong dengan "-No Entry-".
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
Memisahkan kolom nama menjadi nama depan dan nama belakang, lalu mengganti nama kolom baru. Karena mungkin terdapat lebih banyak nilai daripada jumlah kolom yang tersedia, buat kolom nama belakang menjadi daftar yang menyertakan semua nilai setelah nama depan.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
