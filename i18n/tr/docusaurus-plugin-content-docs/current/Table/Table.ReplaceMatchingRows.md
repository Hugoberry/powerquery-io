---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Tüm belirtilen satırları sağlanan satırlarla değiştirir.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

<code>table</code> içindeki tüm belirtilen satırları sağlanan satırlarla değiştirir. Değiştirilecek satırlar ve değiştirmeler, <code>replacements</code> içinde \{old, new} biçimi kullanılarak belirtilir.    Tablonun satırları arasındaki karşılaştırmayı denetlemek üzere <code>equationCriteria</code> isteğe bağlı parametresi belirtilebilir.


## Examples

### Example #1 
Tabloda [a = 1, b = 2] ve [a = 2, b = 3] satırlarını [a = -1, b = -2] ve [a = -2, b = -3] satırları ile değiştirir.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
