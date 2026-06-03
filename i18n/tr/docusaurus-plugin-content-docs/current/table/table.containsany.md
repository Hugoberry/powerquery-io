---
title: Table.ContainsAny
---

# Table.ContainsAny


Belirtilen kayıtlardan herhangi birinin tabloda satır olarak görünüp görünmediğini gösterir.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

`rows` kayıt listesindeki belirtilen kayıtlardan herhangi birinin `table` içinde satır olarak görünüp görünmediğini gösterir. Tablonun satırları arasındaki karşılaştırmayı denetlemek üzere `equationCriteria` isteğe bağlı parametresi belirtilebilir.


## Examples

### Example #1
`({[a = 1, b = 2], [a = 3, b = 4]})` tablosunun `[a = 1, b = 2]` veya `[a = 3, b = 5]` satırlarını içerip içermediğini belirler.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
`({[a = 1, b = 2], [a = 3, b = 4]})` tablosunun `[a = 1, b = 3]` veya `[a = 3, b = 5]` satırlarını içerip içermediğini belirler.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
`(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` tablosunun `[a = 1, b = 3]` veya `[a = 3, b = 5]` satırlarını içerip içermediğini yalnıza \[a\] sütununu karşılaştırarak belirler.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
