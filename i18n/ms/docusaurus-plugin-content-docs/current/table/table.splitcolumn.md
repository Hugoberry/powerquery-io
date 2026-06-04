---
title: Table.SplitColumn
---

# Table.SplitColumn


Memisahkan lajur yang ditentukan kepada set lajur tambahan menggunakan fungsi pemisah yang ditentukan.


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

Memisahkan lajur yang ditentukan menjadi set lajur tambahan menggunakan fungsi pemisah yang ditentukan.

-   `table`: Jadual yang mengandungi lajur untuk dipisahkan.
-   `sourceColumn`: Nama lajur untuk dipisahkan.
-   `splitter`: Fungsi pemisah yang digunakan untuk memisahkan lajur (contohnya, `Splitter.SplitTextByDelimiter` atau `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: Sama ada senarai nama lajur baharu untuk dicipta atau bilangan lajur baharu.
-   `default`: Mengatasi nilai yang digunakan apabila nilai pemisahan tidak mencukupi untuk mengisi semua lajur baharu. Lalai untuk parameter ini ialah `null`.
-   `extraColumns`: Menentukan perkara yang perlu dilakukan jika mungkin terdapat lebih banyak nilai pemisahan berbanding bilangan lajur baharu. Anda boleh menghantar nilai penyenaraian `ExtraValues.Type` kepada parameter ini. Lalai ialah `ExtraValues.Ignore`.


## Examples

### Example #1
Pisahkan lajur nama kepada nama pertama dan nama keluarga.
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
Pisahkan lajur nama kepada nama pertama dan nama keluarga, kemudian namakan semula lajur baru.
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
Pisahkan lajur nama kepada nama pertama dan nama keluarga, namakan semula lajur baru, dan isikan sebarang kekosongan dengan "-Tiada Entri-".
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
Pisahkan lajur nama kepada nama pertama dan nama keluarga, kemudian namakan semula lajur baru. Oleh kerana mungkin terdapat lebih banyak nilai berbanding bilangan lajur yang tersedia, jadikan lajur nama akhir sebagai senarai yang mengandungi semua nilai selepas nama pertama.
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
