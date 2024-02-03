---
title: Table.Repeat
---

# Table.Repeat


## Description

Повторяет строки таблиц указанное число раз.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Возвращает таблицу со строками из входа <code>table</code>, повторенными указанное число раз, <code>count</code>.


## Examples

### Example #1 
Повтор строк в таблице дважды.
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
