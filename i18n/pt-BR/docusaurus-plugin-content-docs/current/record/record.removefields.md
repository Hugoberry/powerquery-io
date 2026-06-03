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

Retorna um registro que remove todos os campos especificados na lista `fields` da entrada `record`. Se o campo especificado não existir, um erro será gerado.


## Examples

### Example #1
Remover o campo "Price" do registro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Remover os campos "Price" e "Item" do registro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
