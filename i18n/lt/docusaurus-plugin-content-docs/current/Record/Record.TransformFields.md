---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Pateikiamas įrašas pritaikius nurodytas transformacijas.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Pateikiamas įrašas pritaikius sąraše <code>transformOperations</code> nurodytas transformacijas <code>record</code>.    Nurodytu laiku gali būti transformuojamas vienas ar daugiau laukų.      <div>Jei transformuojamas vienas laukas, laukiama, kad <code>transformOperations</code> bus sąrašas su dviem elementais. Pirmasis elementas, esantis <code>transformOperations</code>, nurodo lauko pavadinimą, o antrasis elementas, esantis <code>transformOperations</code>, nurodo funkciją, kuri bus naudojama transformuojant. Pavyzdžiui, <code>\{"Quantity", Number.FromText}</code></div>      <div>Jei transformuojami keli laukai, laukiama, kad <code>transformOperations</code> bus sąrašų sąrašas, kuriame kiekvienas vidinis sąrašas yra lauko pavadinimo ir transformacijos operacijos pora. Pavyzdžiui, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


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
