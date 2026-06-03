---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Tüm belirtilen aralıktaki satırları sağlanan satırlarla değiştirir.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

`table` girdisinde `count` belirtilen sayısındaki satırı `offset` sonrasında başlayan, belirtilen `rows` ile değiştirir. `rows` parametresi bir kayıt listesidir.

-   `table`: Değiştirmenin gerçekleştirildiği tablo.
-   `offset`: Değiştirmeyi yapmadan önce atlanacak satır sayısı.
-   `count`: Değiştirilecek satırların sayısı.
-   `rows`: `table` öğesine, `offset` tarafından belirtilen konumda eklenecek satır kayıtlarının listesi.


## Examples

### Example #1
1 konumundan başlayarak 3 satır değiştirir.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
