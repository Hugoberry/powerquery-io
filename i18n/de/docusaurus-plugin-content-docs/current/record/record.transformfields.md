---
title: Record.TransformFields
---

# Record.TransformFields


Gibt einen Datensatz nach Anwendung der angegebenen Transformationen zurück.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Gibt einen Datensatz zurück, nachdem die in der Liste "`transformOperations`" angegebenen Transformationen auf "`record`" angewendet wurden. Mehrere Felder können gleichzeitig transformiert werden.

Wird nur ein einzelnes Feld transformiert, wird für "`transformOperations`" eine Liste mit zwei Elementen erwartet. Das erste Element in "`transformOperations`" gibt einen Feldnamen an. Das zweite Element in "`transformOperations`" gibt die gewünschte Transformationsfunktion an. Beispiel: `{"Quantity", Number.FromText}`

Werden mehrere Felder transformiert, wird für "`transformOperations`" eine Liste mit Listen erwartet, wobei es sich bei den enthaltenen Listen jeweils um ein Paar aus Feldname und Transformationsvorgang handeln muss. Beispiel: `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Konvertieren des Felds "Preis" in eine Zahl.
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
Konvertieren der Felder "OrderID" und "Preis" in Zahlen.
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
