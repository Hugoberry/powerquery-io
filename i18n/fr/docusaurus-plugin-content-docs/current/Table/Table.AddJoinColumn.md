---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Effectue une jointure entre des tables selon les colonnes fournies et produit le résultat de la jointure dans une nouvelle colonne.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

Joint les lignes de <code>table1</code> aux lignes de <code>table2</code> en fonction de l'égalité des valeurs des colonnes clés sélectionnées par <code>key1</code> (pour <code>table1</code>) et par <code>key2</code> (pour <code>table2</code>). Les résultats sont entrés dans la colonne nommée <code>newColumnName</code>.Cette fonction se comporte de la même façon que Table.Join avec un JoinKind de LeftOuter, mais les résultats de la jointure sont présentés de façon imbriquée plutôt qu'aplatie.


## Examples

### Example #1 
Ajoute une colonne de jointure à (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) nommée &#34; price/stock &#34; depuis la table (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) jointe sur [saleID].
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
