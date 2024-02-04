---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Devolve um registo depois de aplicar as transformações especificadas.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Devolve um registo depois de aplicar as transformações especificadas na lista <code>transformOperations</code> a <code>record</code>.    É possível transformar um ou mais campos a uma hora específica.      <div>Caso só esteja a ser transformado um campo, espera-se que <code>transformOperations</code> seja uma lista com dois itens. O primeiro item existente em <code>transformOperations</code> especifica um nome de campo, enquanto que o segundo item existente em <code>transformOperations</code> especifica a função a ser utilizada para transformação. Por exemplo, <code>\{"Quantity", Number.FromText}</code></div>      <div>Caso estejam a ser transformados vários campos, espera-se que <code>transformOperations</code> seja uma lista de listas, em que cada lista interna é um par constituído por um nome de campo e por uma operação de transformação. Por exemplo, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Converter o campo &#34;Preço&#34; num número.
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
Converter os campos &#34;IDEncomenda&#34; e &#34;Preço&#34; em números.
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
