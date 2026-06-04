---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Menggunakan transformasi jenis bagi bentuk \{ column, type \} menggunakan budaya khusus.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

Mengembalikan jadual dengan melaksanakan operasi transformasi pada lajur yang ditentukan menggunakan budaya pilihan.

-   `table`: Jadual input untuk diubah.
-   `typeTransformations`: Transformasi jenis yang akan digunakan. Format untuk satu transformasi ialah \{ column name, type value \}. Senarai transformasi boleh digunakan untuk mengubah jenis bagi lebih daripada satu lajur pada satu masa. Jika lajur tidak wujud, ralat akan dibangkitkan.
-   `culture`: (Pilihan) Budaya untuk digunakan apabila mengubah jenis lajur (contohnya, "en-US"). Jika rekod ditentukan untuk `culture`, ia boleh mengandungi medan berikut:
    -   `Budaya`: Budaya untuk digunakan apabila mengubah jenis lajur (contohnya, "en-US").
    -   `MissingField`: Jika lajur tidak wujud, ralat dibangkitkan melainkan medan ini menyediakan kelakuan alternatif (contohnya, `MissingField.UseNull` atau `MissingField.Ignore`).

Nilai jenis dalam parameter `typeTransformations` boleh menjadi `apa-apa`, semua jenis `nombor`, `teks`, semua jenis `tarikh`, `masa`, `datetime`, `datetimezone`, dan `tempoh`, `logik`, atau `perduaan`. Jenis `senarai`, `rekod`, `jadual`, atau `fungsi` adalah tidak sah untuk parameter ini.  
  
Untuk setiap lajur yang disenaraikan dalam `typeTransformations`, kaedah ".From" yang sepadan dengan nilai jenis yang ditentukan biasanya digunakan untuk melaksanakan transformasi. Contohnya, jika nilai jenis `Currency.Type` diberikan untuk lajur, fungsi transformasi `Currency.From` digunakan pada setiap nilai dalam lajur tersebut.


## Examples

### Example #1
Ubah nilai nombor dalam lajur pertama kepada nilai teks.
```powerquery
let
    Source = #table(type table [a = number, b = number],
    {
        {1, 2},
        {3, 4}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"a", type text}
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [a = text, b = number],
{
    {"1", 2},
    {"3", 4}
})
```


### Example #2
Ubah tarikh dalam jadual kepada teks Perancisnya yang setara.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"Date", type text},
        "fr-FR"
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"JS-464", "USA", "24/03/2024"},
    {"LT-331", "France", "05/10/2024"},
    {"XE-100", "USA", "21/05/2024"},
    {"RT-430", "Germany", "18/01/2024"},
    {"LS-005", "France", "31/12/2023"},
    {"UW-220", "Germany", "25/02/2024"}
})
```


### Example #3
Ubah tarikh dalam jadual kepada kesamaan teks Jerman dan nilai dalam jadual kepada peratusan.
```powerquery
let
    Source = #table(type table [Date = date, Customer ID = text, Value = number],
    {
        {#date(2024, 3, 12), "134282", .24368},
        {#date(2024, 5, 30), "44343", .03556},
        {#date(2023, 12, 14), "22", .3834}
    }),
    #"Transform Columns" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"Value", Percentage.Type}},
        "de-DE")
in
    #"Transform Columns"
```

Result: 
```powerquery
#table(type table [Date = text, Customer ID = text, Value = Percentage.Type],
{
    {"12.03.2024", "134282", .24368},
    {"30.05.2024", "44343", .03556},
    {"14.12.2023", "22", .3834}
})
```


### Example #4
Gunakan transformasi dengan nilai rekod untuk `budaya`.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"NewColumn", type number}},
        [Culture="fr-FR", MissingField=MissingField.UseNull]
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text, NewColumn = number],
{
    {"JS-464", "USA", "24/03/2024", null},
    {"LT-331", "France", "05/10/2024", null},
    {"XE-100", "USA", "21/05/2024", null},
    {"RT-430", "Germany", "18/01/2024", null},
    {"LS-005", "France", "31/12/2023", null},
    {"UW-220", "Germany", "25/02/2024", null}
})
```




## Category
Table.Transformation
