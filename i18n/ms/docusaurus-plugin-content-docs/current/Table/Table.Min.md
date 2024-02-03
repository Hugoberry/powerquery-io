---
title: Table.Min
---

# Table.Min


## Description

Mengembalikan baris terkecil atau nilai lalai menggunakan kriteria yang ditentukan.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Mengembalikan baris terkecil dalam <code>table</code>, <code>comparisonCriteria</code> ditentukan. Jika jadual kosong, nilai <code>default</code> pilihan dikembalikan.


## Examples

### Example #1 
Car baris dengan nilai terkecil dalam lajur [a] dalam jadual.
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
Car baris dengan nilai terkecil dalam lajur [a] dalam jadual. Kembalikan -1 jika kosong.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
