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

Devuelve un registro después de aplicar las transformaciones especificadas en la lista <code>transformOperations</code> a <code>record</code>.    Uno o más campos se pueden transformar en un momento especificado.      <div>Si se transforma un solo campo, se espera que <code>transformOperations</code> sea una lista con dos elementos. El primer elemento de <code>transformOperations</code> especifica un nombre de campo y el segundo elemento de <code>transformOperations</code> especifica la función que se usará para la transformación. Por ejemplo, <code>\{"Quantity", Number.FromText}</code></div>      <div>Si se transforman varios campos, se espera que <code>transformOperations</code> sea una lista de listas, donde cada lista interna es un par de nombre de campo y de operación de transformación. Por ejemplo, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>.


## Examples

### Example #1 
Transformar el campo &#34;Price&#34; en un número.
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
Transformar los campos &#34;OrderID&#34; y &#34;Price&#34; en números.
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
