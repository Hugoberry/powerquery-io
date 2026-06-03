---
title: Record.TransformFields
---

# Record.TransformFields


Devuelve un registro después de aplicar las transformaciones especificadas.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devuelve un registro después de aplicar las transformaciones especificadas en la lista `transformOperations` a `record`. Uno o más campos se pueden transformar en un momento especificado.

Si se transforma un solo campo, se espera que `transformOperations` sea una lista con dos elementos. El primer elemento de `transformOperations` especifica un nombre de campo y el segundo elemento de `transformOperations` especifica la función que se usará para la transformación. Por ejemplo, `{"Quantity", Number.FromText}`

Si se transforman varios campos, se espera que `transformOperations` sea una lista de listas, donde cada lista interna es un par de nombre de campo y de operación de transformación. Por ejemplo, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`

.


## Examples

### Example #1
Transformar el campo "Price" en un número.
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
Transformar los campos "OrderID" y "Price" en números.
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
