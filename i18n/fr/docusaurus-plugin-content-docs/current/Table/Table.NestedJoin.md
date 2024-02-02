---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

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


## Details

Joint les lignes de <code>table1</code> aux lignes de <code>table2</code> en fonction de l'égalité des valeurs des colonnes clés sélectionnées par <code>key1</code> (pour <code>table1</code>) et par <code>key2</code> (pour <code>table2</code>). Les résultats sont entrés dans la colonne nommée <code>newColumnName</code>.<br />La valeur facultative <code>joinKind</code> spécifie le type de jointure à effectuer. Par défaut, une jointure extérieure gauche est effectuée si un <code>joinKind</code> n'est pas spécifié.<br />Un ensemble facultatif de <code>keyEqualityComparers</code> peut être inclus pour spécifier comment comparer les colonnes clés. Cette fonctionnalité est actuellement réservée à une utilisation interne.<br />  


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
