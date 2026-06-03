---
title: Record.RemoveFields
---

# Record.RemoveFields


Supprime les champs spécifiés de l'enregistrement d'entrée.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retourne un enregistrement qui supprime tous les champs spécifiés dans la liste `fields` à partir de l’entrée `record`. Si le champ spécifié n’existe pas, une erreur est levée.


## Examples

### Example #1
Supprime le champ "Price" de l'enregistrement.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Supprime les champs "Price" et "Item" de l'enregistrement.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
