---
title: Record.RemoveFields
---

# Record.RemoveFields


Remove os campos especificados no registro de entrada.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retorna um registro que remove todos os campos especificados na lista <code>fields</code> da entrada <code>record</code>. Se o campo especificado não existir, uma exceção será lançada.


## Examples

### Example #1 
Remover o campo &#34;Price&#34; do registro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Remover os campos &#34;Price&#34; e &#34;Item&#34; do registro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
