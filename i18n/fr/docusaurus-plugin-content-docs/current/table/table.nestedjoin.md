---
title: Table.NestedJoin
---

# Table.NestedJoin


Effectue une jointure entre des tables selon les colonnes fournies et produit le résultat de la jointure dans une nouvelle colonne.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Joint les lignes de `table1` aux lignes de `table2` en fonction de l'égalité des valeurs des colonnes clés sélectionnées par `key1` (pour `table1`) et par `key2` (pour `table2`). Les résultats sont entrés dans la colonne nommée `newColumnName`.

La valeur facultative `joinKind` spécifie le type de jointure à effectuer. Par défaut, une jointure extérieure gauche est effectuée si un `joinKind` n'est pas spécifié.

Un ensemble facultatif de `keyEqualityComparers` peut être inclus pour spécifier comment comparer les colonnes clés. Cette fonctionnalité est actuellement réservée à une utilisation interne.


## Examples

### Example #1
Joignez deux tables à l’aide d’une seule colonne clé.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
