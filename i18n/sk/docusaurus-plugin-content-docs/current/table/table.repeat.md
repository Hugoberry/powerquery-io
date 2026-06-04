---
title: Table.Repeat
---

# Table.Repeat


Vykoná zadaný počet opakovaní riadkov tabuliek.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Vráti tabuľku s riadkami zo vstupu `table` so zadaným počtom opakovaní `count`.


## Examples

### Example #1
Dvakrát opakujte riadky v tabuľke.
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
