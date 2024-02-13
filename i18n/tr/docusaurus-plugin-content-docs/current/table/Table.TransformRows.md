---
title: Table.TransformRows
---

# Table.TransformRows


Tablonun satırlarını belirtilen dönüşüm işlevini kullanarak dönüştürür.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Remarks

<code>table</code> içindeki her satıra <code>transform</code> işlemini uygulayarak bir <code>liste</code> oluşturur.


## Examples

### Example #1 
Bir tablonun satırlarını sayı listesine dönüştürün.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
Bir sayısal tablonun satırlarını metin biçiminde kayıtlara dönüştürün.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
