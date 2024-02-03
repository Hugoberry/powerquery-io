---
title: Record.Combine
---

# Record.Combine


## Description

Zkombinuje záznamy v předaném seznamu.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Zkombinuje záznamy v předaném seznamu <code>records</code>. Pokud seznam <code>records</code> obsahuje jiné hodnoty než záznamy, vrátí chybu.


## Examples

### Example #1 
Vytvoří kombinovaný záznam ze záznamů.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
