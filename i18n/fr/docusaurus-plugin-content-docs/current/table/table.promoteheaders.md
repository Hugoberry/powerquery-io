---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Promeut la première ligne des valeurs comme les nouveaux en-têtes de colonnes (par exemple, les noms de colonnes).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Propose la première ligne de valeurs comme nouveaux en-têtes de colonne (c.-à-d. les noms de colonnes). Par défaut, seules les valeurs de texte ou de nombre sont promues en en-têtes. Options valides :

-   `PromoteAllScalars` : Si défini sur `true`, toutes les valeurs scalaires de la première ligne sont promues en en-têtes en utilisant la `Culture`, si spécifiée (ou les paramètres régionaux du document actuel). Pour les valeurs qui ne peuvent pas être converties en texte, un nom de colonne par défaut sera utilisé.
-   `Culture` : Un nom de culture spécifiant la culture des données.


## Examples

### Example #1
Promeut la première ligne des valeurs dans la table.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2
Promouvez toutes les valeurs scalaires de la première ligne de la table en en-têtes.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
