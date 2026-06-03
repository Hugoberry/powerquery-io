---
title: Record.RemoveFields
---

# Record.RemoveFields


Fjerner det eller de angivne felter fra inputposten.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnerer en post, der fjerner alle de felter, som er angivet på listen `fields`, fra inputtet `record`. Hvis det angivne felt ikke findes, udløses der en fejl.


## Examples

### Example #1
Fjern feltet "Price" fra posten.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Fjern felterne "Price" og "Item" fra posten.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
