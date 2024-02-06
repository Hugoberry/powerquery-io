---
title: Table.Keys
---

# Table.Keys


Returnerar nycklarna för den angivna tabellen.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

Returnerar nycklarna för den angivna tabellen.


## Examples

### Example #1 
Hämta listan över nycklar för en tabell.
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
