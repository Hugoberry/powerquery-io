---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Devolve un rexistro despois de aplicar as transformacións especificadas.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Devolve un rexistro despois de aplicar as transformacións especificadas na lista <code>transformOperations</code> a <code>record</code>.    Pódense transformar un ou máis campos nun momento determinado.      <div>No caso de transformar un único campo, espérase que <code>transformOperations</code> sexa unha lista con dous elementos. O primeiro elemento de <code>transformOperations</code> especifica un nome de campo e o segundo elemento de <code>transformOperations</code> especifica a función que se vai usar para a transformación. Por exemplo, <code>\{"Quantity", Number.FromText}</code></div>      <div>No caso de transformar varios campos, espérase que <code>transformOperations</code> sexa unha lista de listas, onde cada lista interna é unha parella de nome de campo e operación de transformación. Por exemplo, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Converta o campo &#34;Price&#34; a un número.
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
Converter os campos &#34;OrderID&#34; e &#34;Price&#34; a números.
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
