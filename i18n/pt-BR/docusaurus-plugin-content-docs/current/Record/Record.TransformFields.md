---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Retorna um registro após aplicar as transformações especificadas.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Retorna um registro após aplicar as transformações especificadas na lista <code>transformOperations</code> a <code>record</code>.    Um ou mais campos podem ser transformados em um dado momento.       <div>Se um único campo estiver sendo transformado, espera-se que <code>transformOperations</code> seja uma lista com dois itens. O primeiro item em <code>transformOperations</code> especifica um nome de campo, enquanto o segundo item em <code>transformOperations</code> específica a função a ser usada na transformação. Por exemplo, <code>\{"Quantity", Number.FromText}</code></div>      <div>Se vários campos estiverem sendo transformados, espera-se que <code>transformOperations</code> seja uma lista de listas, em que cada lista interna seja um par de nome de campo e operação de transformação. Por exemplo, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Converte o campo &#34;Price&#34; em número.
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
Converte os campos &#34;OrderID&#34; e &#34;Price&#34; em números.
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
