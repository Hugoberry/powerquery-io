---
title: Table.Max
---

# Table.Max


En büyük satırı veya varsayılan değeri, verilen ölçütü kullanarak döndürür.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

`table` içindeki en büyük satırı verilen `comparisonCriteria` öğesini kullanarak döndürür. Tablo boşsa, isteğe bağlı `default` değeri döndürülür.


## Examples

### Example #1
`({[a = 2, b = 4], [a = 6, b = 8]})` tablosunda \[a\] sütunundaki en büyük değere sahip satırı bulur.
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
`({})` tablosunda \[a\] sütunundaki en büyük değere sahip satırı bulur. Boşsa -1 döndürür.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
