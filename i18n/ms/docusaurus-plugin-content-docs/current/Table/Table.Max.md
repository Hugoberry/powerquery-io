---
title: Table.Max
---

# Table.Max


## Description

Mengembalikan baris terbesar atau nilai lalai menggunakan kriteria yang ditentukan.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Mengembalikan baris terbesar dalam <code>table</code>, <code>comparisonCriteria</code> ditentukan. Jika jadual kosong, nilai <code>default</code> pilihan dikembalikan. 


## Examples

### Example #1 
Car baris dengan nilai terbesar dalam lajur [a] dalam jadual &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Car baris dengan nilai terbesar dalam lajur [a] dalam jadual &lt;code&gt;(\{})&lt;/code&gt;. Kembalikan -1 jika kosong.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
