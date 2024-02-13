---
title: Table.Group
---

# Table.Group


Regroupe les lignes de la table qui ont la même clé.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Regroupe les lignes de <code>table</code> par les colonnes clés définies par <code>key</code>. Le <code>key</code> peut être un nom de colonne unique ou une liste de noms de colonnes.    Pour chaque groupe, un enregistrement est créé à partir des colonnes clés (et de leurs valeurs), ainsi que de toute colonne agrégée spécifiée par <code>aggregatedColumns</code>.    Vous pouvez également spécifier <code>groupKind</code> et <code>comparer</code>.<br />    <br />    Si les données sont déjà triées en fonction des colonnes clés, un <code>groupKind</code> de GroupKind.Local peut être fourni. Cela peut améliorer les performances du regroupement dans certains cas,    comme toutes les lignes avec un ensemble de valeurs de clés donné sont supposées être contiguës.<br />    <br />    Lors de la transmission d’un <code>comparer</code>, notez que s’il traite des clés différentes comme étant égales, une ligne peut être placée dans un groupe dont les clés diffèrent.<br />    <br />    Cette fonction ne garantit pas l’ordre des lignes qu’elle retourne.  


## Examples

### Example #1 
Regroupe la table, en ajoutant une colonne d&#39;agrégation [total] qui contient la somme des prix (&#34;each List.Sum([price])&#34;).
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
