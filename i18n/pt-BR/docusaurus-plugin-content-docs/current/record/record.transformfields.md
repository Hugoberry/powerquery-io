---
title: Record.TransformFields
---

# Record.TransformFields


Retorna um registro após aplicar as transformações especificadas.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retorna um registro após aplicar as transformações especificadas na lista `transformOperations` a `record`. Um ou mais campos podem ser transformados em um dado momento.

Se um único campo estiver sendo transformado, espera-se que `transformOperations` seja uma lista com dois itens. O primeiro item em `transformOperations` especifica um nome de campo, enquanto o segundo item em `transformOperations` específica a função a ser usada na transformação. Por exemplo, `{"Quantity", Number.FromText}`

Se vários campos estiverem sendo transformados, espera-se que `transformOperations` seja uma lista de listas, em que cada lista interna seja um par de nome de campo e operação de transformação. Por exemplo, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Converte o campo "Price" em número.
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
Converte os campos "OrderID" e "Price" em números.
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
