---
title: Record.RemoveFields
---

# Record.RemoveFields


Uklanja navedena polja iz ulaznog zapisa.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Vraća zapis koji uklanja sva polja navedena na listi `fields` iz unosa `record`. Ako navedeno polje ne postoji, prijavljuje se greška.


## Examples

### Example #1
Uklanjanje polja „Cena“ iz zapisa.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Uklanjanje polja „Cena“ i „Stavka“ iz zapisa.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
