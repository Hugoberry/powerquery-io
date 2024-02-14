---
title: Table.Buffer
---

# Table.Buffer


Place une table dans la mémoire tampon, en l&#39;isolant des modifications externes pendant l&#39;évaluation.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Met une table en mémoire tampon, l'isolant des modifications externes lors de l'évaluation.    La mise en mémoire tampon est peu profonde. Il force l’évaluation de toutes les valeurs de cellules scalaires, mais laisse les valeurs non scalaires (enregistrements, listes, tables, etc.) telles quelles.    <br />    <br />    Notez que l’utilisation de cette fonction peut ou non accélérer l’exécution de vos requêtes. Dans certains cas, cela peut ralentir l’exécution de vos requêtes en raison de l’ajout     le coût de la lecture de toutes les données et de leur stockage en mémoire, ainsi que le fait que la mise en mémoire tampon empêche le repliement en aval. Si les données n’ont pas besoin d’être    mis en mémoire tampon mais que vous souhaitez simplement empêcher le pliage en aval, utilisez plutôt <code>Table.StopFolding</code>.


## Examples

### Example #1 
Chargez toutes les lignes d&#39;une table SQL en mémoire, afin que les opérations en aval ne puissent plus interroger le serveur SQL.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
