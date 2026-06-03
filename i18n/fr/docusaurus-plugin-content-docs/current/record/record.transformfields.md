---
title: Record.TransformFields
---

# Record.TransformFields


Retourne un enregistrement après avoir appliqué les transformations spécifiées.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retourne un enregistrement après avoir appliqué les transformations spécifiées dans la liste `transformOperations` sur `record`. Un ou plusieurs champs peuvent être transformés à un moment donné.

Si un seul champ est modifié, `transformOperations` sera une liste contenant deux éléments. Le premier élément dans `transformOperations` spécifie un nom de champ, et le second élément dans `transformOperations` spécifie la fonction à utiliser pour la transformation. Par exemple, `{"Quantity", Number.FromText}`

Si plusieurs champs sont transformés, `transformOperations` sera une liste de listes, où chaque liste interne est une paire de nom de champ et d'opération de transformation. Par exemple, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Convertissez le champ « Price » en nombre.
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
Convertissez les champs « OrderID » et « Price » en nombres.
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
