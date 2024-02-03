---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Menerapkan transformasi tipe formulir \{ column, type } menggunakan kultur tertentu.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Menghasilkan tabel dari input <code>table</code> dengan menerapkan operasi transformasi ke kolom yang ditetapkan dalam parameter <code>typeTransformations</code> (dengan format \{ column name, type name}), menggunakan kultur tertentu pada parameter opsional <code>culture</code> (misalnya, "en-US").    Jika kolom tidak ada, pengecualian akan dibuat.


## Examples

### Example #1 
Mentransformasi nilai angka pada kolom [a] ke nilai teks dari tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
