---
title: Table.Repeat
---

# Table.Repeat


Tablonun satırlarını belirtilen sayıda yineler.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

<code>table</code> girdisinden belirtilen <code>count</code> sayıda yinelenen sütunları içeren bir tablo döndürür.


## Examples

### Example #1 
Tabloda bulunan satırları iki kez yineler.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
