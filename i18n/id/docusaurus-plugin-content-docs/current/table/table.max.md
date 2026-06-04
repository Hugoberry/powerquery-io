---
title: Table.Max
---

# Table.Max


Menghasilkan baris terbesar atau nilai default menggunakan kriteria yang diberikan.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Menghasilkan baris terbesar di `table`, memberikan `comparisonCriteria`. Jika tabel kosong, nilai `default` opsional akan dihasilkan.


## Examples

### Example #1
Mencari baris dengan nilai terbesar di kolom \[a\] dalam tabel `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
Mencari baris dengan nilai terbesar di kolom \[a\] dalam tabel `({})`. Menghasilkan -1 jika kosong.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
