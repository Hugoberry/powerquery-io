---
title: Table.Repeat
---

# Table.Repeat


## Description

Кестелердің жолдарын көрсетілген рет қайталайды.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Кіріс <code>table</code> ішінен жолдары көрсетілген <code>count</code> рет қайталанатын кестені қайтарады.


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
