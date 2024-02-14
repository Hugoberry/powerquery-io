---
title: Record.SelectFields
---

# Record.SelectFields


Devuelve un registro que solo contiene los campos especificados.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devuelve un registro que incluye solo los campos especificados en la lista <code>fields</code> de la entrada <code>record</code>.


## Examples

### Example #1 
Seleccione los campos &#34;Item&#34; y &#34;Price&#34; en el registro.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
