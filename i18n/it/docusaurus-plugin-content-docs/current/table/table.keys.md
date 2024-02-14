---
title: Table.Keys
---

# Table.Keys


Restituisce le chiavi della tabella specificata.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

Restituisce le chiavi della tabella specificata.


## Examples

### Example #1 
Recupera l&#39;elenco delle chiavi per una tabella.
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
