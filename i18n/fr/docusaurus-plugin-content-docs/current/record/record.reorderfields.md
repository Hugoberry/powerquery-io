---
title: Record.ReorderFields
---

# Record.ReorderFields


Réorganisez les champs d’enregistrement pour qu’ils correspondent à l’ordre d’une liste de noms de champs.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Réordonne les champs d'un enregistrement pour qu'ils correspondent à l'ordre d'une liste de noms de champs.

-   `record` : L'enregistrement contenant les champs à réordonner.
-   `fieldOrder` : Une liste contenant le nouvel ordre des champs à appliquer à l'enregistrement. Les valeurs des champs sont conservées et les champs non listés dans ce paramètre restent à leur position d'origine.
-   `missingField` : Spécifie l'action attendue pour les valeurs manquantes dans une ligne contenant moins de champs que prévu. Les valeurs suivantes sont valides :
    -   `MissingField.Error` : (Par défaut) Indique que les champs manquants doivent entraîner une erreur. Si aucune valeur n'est saisie pour le paramètre `missingField`, cette valeur est utilisée.
    -   `MissingField.Ignore` : Indique que les champs manquants doivent être ignorés.
    -   `MissingField.UseNull` : Indique que les champs manquants doivent être inclus en tant que valeurs `null`.


## Examples

### Example #1
Réorganise certains des champs dans l'enregistrement.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Réorganisez certains champs de l’enregistrement et incluez `null` pour les champs manquants.
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
