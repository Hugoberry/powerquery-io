---
title: Record.Combine
---

# Record.Combine


Combina i record nell'elenco specificato.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Combina i record nell'elemento specificato `records`. Se `records` contiene valori non di record, viene restituito un errore.


## Examples

### Example #1
Creare un record combinato dai record.
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
