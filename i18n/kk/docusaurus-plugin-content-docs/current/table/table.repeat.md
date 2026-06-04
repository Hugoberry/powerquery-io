---
title: Table.Repeat
---

# Table.Repeat


Кестелердің жолдарын көрсетілген рет қайталайды.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Кіріс `table` ішінен жолдары көрсетілген `count` рет қайталанатын кестені қайтарады.


## Examples

### Example #1
Кестедегі жолдарды екі рет қайталау.
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
