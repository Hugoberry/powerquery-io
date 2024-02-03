---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Uklanja navedena polja iz ulaznog zapisa.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Vraća zapis koji uklanja sva polja navedena na listi <code>fields</code> iz unosa <code>record</code>. Ako navedeno polje ne postoji, vraća se izuzetak.


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
