---
title: Table.Keys
---

# Table.Keys


## Description

Көрсетілген кестенің кілттерін қайтарады.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Көрсетілген кестенің кілттерін қайтарады.


## Examples

### Example #1 
Кестеге арналған кілттер тізімін алыңыз.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    keys = Table.Keys(tableWithKeys)
in
    keys
```

Result: 
```powerquery
{[Columns = {"Id"}, Primary = true]}
```




## Category
Table.Transformation
