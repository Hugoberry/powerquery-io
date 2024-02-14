---
title: Record.RemoveFields
---

# Record.RemoveFields


Usuwa określone pola z rekordu wejściowego.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Zwraca rekord powstały przez usunięcie z rekordu wejściowego <code>record</code> wszystkich pól określonych na liście <code>fields</code>. Jeśli określone pole nie istnieje, jest zwracany wyjątek.


## Examples

### Example #1 
Usuń pole „Price” z rekordu.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Usuń pola „Price” i „Item” z rekordu.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
