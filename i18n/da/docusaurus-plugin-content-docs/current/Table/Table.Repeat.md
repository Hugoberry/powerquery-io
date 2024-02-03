---
title: Table.Repeat
---

# Table.Repeat


## Description

Gentag rækkerne i tabellerne et angivet antal gange.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Returnerer en tabel med rækkerne fra inputtet <code>table</code> gentaget de angivne <code>count</code> gange.


## Examples

### Example #1 
Gentag rækkerne i tabellen to gange.
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
