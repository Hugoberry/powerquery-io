---
title: Record.TransformFields
---

# Record.TransformFields


Devolve un rexistro despois de aplicar as transformacións especificadas.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devolve un rexistro despois de aplicar as transformacións especificadas na lista `transformOperations` a `record`. Pódense transformar un ou máis campos nun momento determinado.

No caso de transformar un único campo, espérase que `transformOperations` sexa unha lista con dous elementos. O primeiro elemento de `transformOperations` especifica un nome de campo e o segundo elemento de `transformOperations` especifica a función que se vai usar para a transformación. Por exemplo, `{"Quantity", Number.FromText}`

No caso de transformar varios campos, espérase que `transformOperations` sexa unha lista de listas, onde cada lista interna é unha parella de nome de campo e operación de transformación. Por exemplo, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Converta o campo "Price" a un número.
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
Converter os campos "OrderID" e "Price" a números.
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
