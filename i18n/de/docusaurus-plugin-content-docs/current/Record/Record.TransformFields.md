---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Gibt einen Datensatz nach Anwendung der angegebenen Transformationen zurück.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Gibt einen Datensatz zurück, nachdem die in der Liste "<code>transformOperations</code>" angegebenen Transformationen auf "<code>record</code>" angewendet wurden.    Mehrere Felder können gleichzeitig transformiert werden.      <div>Wird nur ein einzelnes Feld transformiert, wird für "<code>transformOperations</code>" eine Liste mit zwei Elementen erwartet. Das erste Element in "<code>transformOperations</code>" gibt einen Feldnamen an. Das zweite Element in "<code>transformOperations</code>" gibt die gewünschte Transformationsfunktion an. Beispiel: <code>\{"Quantity", Number.FromText}</code></div>      <div>Werden mehrere Felder transformiert, wird für "<code>transformOperations</code>" eine Liste mit Listen erwartet, wobei es sich bei den enthaltenen Listen jeweils um ein Paar aus Feldname und Transformationsvorgang handeln muss. Beispiel: <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Konvertieren des Felds &#34;Preis&#34; in eine Zahl.
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
Konvertieren der Felder &#34;OrderID&#34; und &#34;Preis&#34; in Zahlen.
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
