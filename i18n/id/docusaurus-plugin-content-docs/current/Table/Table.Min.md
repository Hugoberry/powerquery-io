---
title: Table.Min
---

# Table.Min


## Description

Menghasilkan baris terkecil atau nilai default menggunakan kriteria yang diberikan.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Menghasilkan baris terkecil di <code>table</code>, memberikan <code>comparisonCriteria</code>. Jika tabel kosong, nilai <code>default</code> opsional akan dihasilkan.


## Examples

### Example #1 
Mencari baris dengan nilai terkecil di kolom [a] dalam tabel.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Mencari baris dengan nilai terkecil di kolom [a] dalam tabel. Menghasilkan -1 jika kosong.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
