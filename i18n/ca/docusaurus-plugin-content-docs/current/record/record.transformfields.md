---
title: Record.TransformFields
---

# Record.TransformFields


Retorna un registre després d'aplicar les transformacions especificades.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retorna un registre després d'aplicar les transformacions especificades a la llista `transformOperations` a `record`. És possible que un o més camps es transformin en un moment donat.

En cas de transformació d'un únic camp, s'espera que `transformOperations` sigui una llista amb dos elements. El primer element de `transformOperations` especifica un nom de camp i el segon element de `transformOperations` especifica la funció que s'ha d'utilitzar per a la transformació. Per exemple, `{"Quantity", Number.FromText}`

En cas de transformació de diversos camps, s'espera que `transformOperations` sigui una llista de llistes, en què cada llista interna és un parell format per nom de camp i operació de transformació. Per exemple, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Converteix el camp "Price" en un nombre.
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
Converteix els camps "OrderID" i "Price" en nombres.
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
