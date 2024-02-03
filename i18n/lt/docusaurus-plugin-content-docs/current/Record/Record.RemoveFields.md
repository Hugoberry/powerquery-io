---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Pašalina nurodytą (-us) lauką (-us) iš įvesties įrašo.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Pateikiamas įrašas, pašalinantis visus sąraše <code>fields</code> nurodytus laukus iš įvesties <code>record</code>. Jei nurodyto lauko nėra, pateikiama išimtis.


## Examples

### Example #1 
Pašalinkite lauką „Price“ iš įrašo.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Pašalinkite laukus „Price“ ir „Item“ iš įrašo.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
