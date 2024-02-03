---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Tablodan belirtilen satırların tüm oluşumlarını kaldırır.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

<code>table</code> öğesinden belirtilen <code>rows</code> öğesinin tüm oluşumlarını kaldırır.    Tablonun satırları arasındaki karşılaştırmayı denetlemek üzere <code>equationCriteria</code> isteğe bağlı parametresi belirtilebilir.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt; tablosunda [a = 1] olan tüm satırları kaldırır.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
