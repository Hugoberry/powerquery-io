---
title: Record.RemoveFields
---

# Record.RemoveFields


Elimină câmpurile specificate din înregistrarea de intrare.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnează o înregistrare care elimină toate câmpurile specificate în lista `fields` din datele introduse `record`. În cazul în care câmpul specificat nu există, se generează o eroare.


## Examples

### Example #1
Eliminați câmpul „Preț” din înregistrare.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Eliminați câmpurile „Preț” și „Element” din înregistrare.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
