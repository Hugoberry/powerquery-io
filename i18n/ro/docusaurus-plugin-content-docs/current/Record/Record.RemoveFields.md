---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Elimină câmpurile specificate din înregistrarea de intrare.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Returnează o înregistrare care elimină toate câmpurile specificate în lista <code>fields</code> din datele introduse <code>record</code>. În cazul în care câmpul specificat nu există, apare o excepţie.


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
