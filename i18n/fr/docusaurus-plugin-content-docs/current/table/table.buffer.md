---
title: Table.Buffer
---

# Table.Buffer


Place une table dans la mémoire tampon, en l'isolant des modifications externes pendant l'évaluation.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Met une table en mémoire tampon, l’isolant des modifications externes durant l’évaluation. Le tamponnage est superficiel. Il force l'évaluation de toute valeur scalaire de cellule, mais laisse les valeurs non scalaires (enregistrements, listes, tableaux, etc.) telles quelles.

-   `table` : La table à mettre en mémoire tampon.
-   `options` : (Facultatif) Les valeurs d’enregistrement suivantes peuvent être utilisées :
    -   `BufferMode` : Le mode de tampon décrivant le type de mise en mémoire tampon à effectuer. Cette option peut être soit `BufferMode.Eager`, soit `BufferMode.Delayed`.

L'utilisation de cette fonction pourrait, ou non, accélérer l'exécution de vos requêtes. Dans certains cas, cela peut ralentir l’exécution de vos requêtes en raison de l’ajout le coût de la lecture de l'ensemble des données et de leur stockage en mémoire, ainsi que le fait que la mise en mémoire tampon empêche le repliement en aval. Si les données n’ont pas besoin d’être ...mis en mémoire tampon, mais que vous souhaitez simplement empêcher le repliage en aval, utilisez plutôt `Table.StopFolding`.


## Examples

### Example #1
Chargez toutes les lignes d’une table SQL en mémoire, afin que les opérations en aval ne puissent plus interroger le serveur SQL.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
