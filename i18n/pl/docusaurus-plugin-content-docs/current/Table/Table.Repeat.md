---
title: Table.Repeat
---

# Table.Repeat


## Description

Powtarza określoną liczbę razy wiersze tabel.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Zwraca tabelę, w której wiersze z tabeli wejściowej <code>table</code> zostały powtórzone określoną liczbę razy (<code>count</code>).


## Examples

### Example #1 
Powtórz dwa razy wiersze w tabeli.
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
