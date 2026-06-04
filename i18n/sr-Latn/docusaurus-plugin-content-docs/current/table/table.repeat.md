---
title: Table.Repeat
---

# Table.Repeat


Ponavlja redove tabela navedeni broj puta.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Vraća tabelu sa redovima iz unosa `table`, koji su ponovljeni navedenih `count` puta.


## Examples

### Example #1
Ponavljanje redova iz tabele dva puta.
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
