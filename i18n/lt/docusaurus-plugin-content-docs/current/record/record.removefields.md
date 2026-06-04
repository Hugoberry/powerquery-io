---
title: Record.RemoveFields
---

# Record.RemoveFields


Pašalina nurodytą (-us) lauką (-us) iš įvesties įrašo.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Pateikiamas įrašas, pašalinantis visus sąraše `fields` nurodytus laukus iš įvesties `record`. Jei nurodytas laukas neegzistuoja, pateikiama klaida.


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
