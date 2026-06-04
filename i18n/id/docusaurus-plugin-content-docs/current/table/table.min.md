---
title: Table.Min
---

# Table.Min


Menghasilkan baris terkecil atau nilai default menggunakan kriteria yang diberikan.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Menghasilkan baris terkecil di `table`, memberikan `comparisonCriteria`. Jika tabel kosong, nilai `default` opsional akan dihasilkan.


## Examples

### Example #1
Mencari baris dengan nilai terkecil di kolom \[a\] dalam tabel.
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
Mencari baris dengan nilai terkecil di kolom \[a\] dalam tabel. Menghasilkan -1 jika kosong.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
