---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Tablodaki belirtilen satırlardan herhangi birinin konum veya konumlarını döndürür.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

`table` listesinin ilk oluşumuna ait `rows` öğesinden satır konumlarını döndürür. Hiçbir eşleşme bulunmazsa -1 değerini döndürür.

-   `table`: Girdi tablosu.
-   `rows`: Tabloda konumların bulunacağı satır listesi.
-   `occurrence`: *(Optional)* Satırın hangi oluşumlarının döndürüleceğini belirtir.
-   `equationCriteria`: *(Optional)* Tablo satırları arasındaki karşılaştırmayı denetler.


## Examples

### Example #1
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` tablosunda \[a = 2, b = 4\] veya \[a = 6, b = 8\] değerlerinin ilk oluşum konumunu bulur.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}` tablosunda \[a = 2, b = 4\] veya \[a = 6, b = 8\] değerlerinin tüm oluşumlarının konumunu bulur.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
