---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Vráti záznam po použití zadaných transformácií.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Vráti záznam po použití transformácií zadaných v zozname <code>transformOperations</code> v rámci <code>record</code>.    V danom čase možno transformovať najmenej jedno pole.      <div>V prípade transformácie jedného poľa sa očakáva, že zoznam <code>transformOperations</code> bude zoznamom s dvomi položkami. Prvá položka v zozname <code>transformOperations</code> určí názov poľa a druhá položka v zozname <code>transformOperations</code> určí funkciu, ktorá sa má použiť na transformáciu. Príklad: <code>\{"Quantity", Number.FromText}</code></div>      <div>V prípade transformácie viacerých polí sa očakáva, že zoznam <code>transformOperations</code> bude zoznamom zoznamov, pričom každý vnútorný zoznam tvorí dvojica názov poľa a operácia transformácie. Príklad: <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


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
