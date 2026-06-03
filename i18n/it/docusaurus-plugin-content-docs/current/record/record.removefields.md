---
title: Record.RemoveFields
---

# Record.RemoveFields


Rimuove i campi specificati dal record di input.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Restituisce un record che rimuove tutti i campi specificati nell'elenco `fields` dell'input `record`. Se il campo specificato non esiste, viene generato un errore.


## Examples

### Example #1
Rimuovere il campo "Price" dal record.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Rimuovere i campi "Price" e "Item" dal record.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
