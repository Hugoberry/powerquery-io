---
title: Record.TransformFields
---

# Record.TransformFields


Devolve um registo depois de aplicar as transformações especificadas.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devolve um registo depois de aplicar as transformações especificadas na lista `transformOperations` a `record`. É possível transformar um ou mais campos a uma hora específica.

Caso só esteja a ser transformado um campo, espera-se que `transformOperations` seja uma lista com dois itens. O primeiro item existente em `transformOperations` especifica um nome de campo, enquanto que o segundo item existente em `transformOperations` especifica a função a ser utilizada para transformação. Por exemplo, `{"Quantity", Number.FromText}`

Caso estejam a ser transformados vários campos, espera-se que `transformOperations` seja uma lista de listas, em que cada lista interna é um par constituído por um nome de campo e por uma operação de transformação. Por exemplo, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Converter o campo "Preço" num número.
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
Converter os campos "IDEncomenda" e "Preço" em números.
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
