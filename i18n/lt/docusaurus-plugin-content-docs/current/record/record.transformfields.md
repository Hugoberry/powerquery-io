---
title: Record.TransformFields
---

# Record.TransformFields


Pateikiamas įrašas pritaikius nurodytas transformacijas.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Pateikiamas įrašas pritaikius sąraše `transformOperations` nurodytas transformacijas `record`. Nurodytu laiku gali būti transformuojamas vienas ar daugiau laukų.

Jei transformuojamas vienas laukas, laukiama, kad `transformOperations` bus sąrašas su dviem elementais. Pirmasis elementas, esantis `transformOperations`, nurodo lauko pavadinimą, o antrasis elementas, esantis `transformOperations`, nurodo funkciją, kuri bus naudojama transformuojant. Pavyzdžiui, `{"Quantity", Number.FromText}`

Jei transformuojami keli laukai, laukiama, kad `transformOperations` bus sąrašų sąrašas, kuriame kiekvienas vidinis sąrašas yra lauko pavadinimo ir transformacijos operacijos pora. Pavyzdžiui, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Konvertuokite lauką Kaina į skaičių.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2
Konvertuokite laukus UžsakymoID ir Kaina į skaičius.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
