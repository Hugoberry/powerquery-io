---
title: Table.Min
---

# Table.Min


En küçük satırı veya varsayılan değeri, verilen ölçütü kullanarak döndürür.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

`table` içindeki en küçük satırı verilen `comparisonCriteria` öğesini kullanarak döndürür. Tablo boşsa, isteğe bağlı `default` değeri döndürülür.


## Examples

### Example #1
Tabloda \[a\] sütununda en küçük değer bulunan satırı bulur.
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
Tabloda \[a\] sütununda en küçük değer bulunan satırı bulur. Boş olması halinde -1 döndürür.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
