---
title: Table.Repeat
---

# Table.Repeat


## Description

Ripete le righe delle tabelle per il numero di volte specificato.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Restituisce una tabella con le righe dall'input <code>table</code> ripetute per <code>count</code> volte.


## Examples

### Example #1 
Ripetere le righe nella tabella due volte.
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
