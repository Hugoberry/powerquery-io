---
title: Table.PositionOf
---

# Table.PositionOf


Tablodaki satırın konum veya konumlarını döndürür.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Belirtilen `row` öğesinde `table` öğesinin ilk oluşumuna ait satır konumunu döndürür. Hiçbir eşleşme bulunmazsa -1 değerini döndürür.

-   `table`: Girdi tablosu.
-   `row`: Tabloda konumun bulunacağı satır.
-   `occurrence`: *(Optional)* Satırın hangi oluşumlarının döndürüleceğini belirtir.
-   `equationCriteria`: *(Optional)* Tablo satırları arasındaki karşılaştırmayı denetler.


## Examples

### Example #1
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` tablosunda \[a = 2, b = 4\] değerlerinin ilk oluşum konumunu bulur.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` tablosunda \[a = 2, b = 4\] değerlerinin ikinci oluşum konumunu bulur.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` tablosunda \[a = 2, b = 4\] değerlerinin tüm oluşumlarının konumunu bulur.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
