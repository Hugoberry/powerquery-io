---
title: Record.RemoveFields
---

# Record.RemoveFields


Suprimeix els camps especificats a partir del registre d'entrada.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retorna un registre que suprimeix tots els camps especificats a la llista `fields` a partir de l'entrada `record`. Si no existeix el camp especificat, es produeix un error.


## Examples

### Example #1
Suprimeix el camp "Price" del registre.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Suprimeix els camps "Price" i "Item" del registre.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
