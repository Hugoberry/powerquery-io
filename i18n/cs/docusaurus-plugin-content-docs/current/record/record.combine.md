---
title: Record.Combine
---

# Record.Combine


Zkombinuje záznamy v předaném seznamu.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Zkombinuje záznamy v předaném seznamu `records`. Pokud seznam `records` obsahuje jiné hodnoty než záznamy, vrátí chybu.


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
