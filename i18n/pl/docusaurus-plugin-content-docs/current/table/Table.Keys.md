---
title: Table.Keys
---

# Table.Keys


Zwraca klucze określonej tabeli.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

Zwraca klucze określonej tabeli.


## Examples

### Example #1 
Pobierz listę kluczy dla tabeli.
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
