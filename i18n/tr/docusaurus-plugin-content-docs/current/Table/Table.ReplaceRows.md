---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

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


## Details

<code>table</code> girdisinde <code>count</code> belirtilen sayısındaki satırı <code>offset</code> sonrasında başlayan, belirtilen <code>rows</code> ile değiştirir. <code>rows</code> parametresi bir kayıt listesidir.    <ul>       <li><code>table</code>: Değiştirmenin gerçekleştirildiği tablo.</li>       <li><code>offset</code>: Değiştirmeyi yapmadan önce atlanacak satır sayısı.</li>       <li><code>count</code>: Değiştirilecek satırların sayısı.</li>       <li><code>rows</code>: <code>table</code> öğesine, <code>offset</code> tarafından belirtilen konumda eklenecek satır kayıtlarının listesi.</li>    </ul>


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
