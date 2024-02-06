---
title: Table.Repeat
---

# Table.Repeat


Upprepar raderna i tabellen angivet antal gånger.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Returnerar en tabell där raderna från angivna indata, <code>table</code>, upprepas <code>count</code> gånger.


## Examples

### Example #1 
Upprepar raderna i tabellen två gånger.
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
