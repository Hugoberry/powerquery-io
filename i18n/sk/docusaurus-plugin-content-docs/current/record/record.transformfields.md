---
title: Record.TransformFields
---

# Record.TransformFields


Vráti záznam po použití zadaných transformácií.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Vráti záznam po použití transformácií zadaných v zozname `transformOperations` v rámci `record`. V danom čase možno transformovať najmenej jedno pole.

V prípade transformácie jedného poľa sa očakáva, že zoznam `transformOperations` bude zoznamom s dvomi položkami. Prvá položka v zozname `transformOperations` určí názov poľa a druhá položka v zozname `transformOperations` určí funkciu, ktorá sa má použiť na transformáciu. Príklad: `{"Quantity", Number.FromText}`

V prípade transformácie viacerých polí sa očakáva, že zoznam `transformOperations` bude zoznamom zoznamov, pričom každý vnútorný zoznam tvorí dvojica názov poľa a operácia transformácie. Príklad: `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Skonvertujte pole Price na číslo.
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
Skonvertujte polia OrderID a Price na čísla.
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
