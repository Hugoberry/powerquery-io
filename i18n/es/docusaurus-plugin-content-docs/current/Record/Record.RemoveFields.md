---
title: Record.RemoveFields
---

# Record.RemoveFields


Quita los campos especificados del registro de entrada.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devuelve un registro que quita todos los campos especificados en la lista <code>fields</code> de la entrada <code>record</code>. Si el campo especificado no existe, se inicia una excepción.


## Examples

### Example #1 
Quitar el campo &#34;Price&#34; del registro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Quitar los campos &#34;Price&#34; e &#34;Item&#34; del registro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
