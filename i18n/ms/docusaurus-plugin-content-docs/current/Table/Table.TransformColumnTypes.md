---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Menggunakan transformasi jenis bagi bentuk \{ column, type } menggunakan budaya khusus.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Mengembalikan jadual daripada input <code>table</code> dengan menggunakan operasi ubah kepada lajur yang ditentukan dalam parameter <code>typeTransformations</code> (yang mana format ialah \{ column name, type name}), menggunakan budaya yang ditentukan dalam parameter pilihan <code>culture</code> (contohnya, "en-US").    Jika lajur tidak wujud, pengecualian dibuang.


## Examples

### Example #1 
transformasikan nilai nombor dalam lajur [a] kepada nilai teks daripada jadual  &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
