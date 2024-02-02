---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Retourne un enregistrement après avoir appliqué les transformations spécifiées.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Retourne un enregistrement après avoir appliqué les transformations spécifiées dans la liste <code>transformOperations</code> sur <code>record</code>.    Un ou plusieurs champs peuvent être transformés à un moment donné.      <div>Si un seul champ est modifié, <code>transformOperations</code> sera une liste contenant deux éléments. Le premier élément dans <code>transformOperations</code> spécifie un nom de champ, et le second élément dans <code>transformOperations</code> spécifie la fonction à utiliser pour la transformation. Par exemple, <code>\{"Quantity", Number.FromText}</code></div>      <div>Si plusieurs champs sont transformés, <code>transformOperations</code> sera une liste de listes, où chaque liste interne est une paire de nom de champ et d'opération de transformation. Par exemple, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Convertissez le champ &#34; Price &#34; en nombre.
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
Convertissez les champs &#34; OrderID &#34; et &#34; Price &#34; en nombres.
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
