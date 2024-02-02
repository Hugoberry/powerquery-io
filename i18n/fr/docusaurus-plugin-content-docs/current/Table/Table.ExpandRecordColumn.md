---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Développe une colonne d&#39;enregistrements dans des colonnes ayant chacune des valeurs.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Details

En fonction des enregistrements de <code>column</code> dans l'entrée <code>table</code>, crée une table avec une colonne pour chaque champ dans l'enregistrement. Au besoin, <code>newColumnNames</code> peut être spécifié pour garantir que des noms uniques pour les colonnes sont utilisés dans la nouvelle table.    <ul>        <li><code>table</code> : table d'origine avec la colonne des enregistrements à développer. </li>        <li><code>column</code> : colonne à développer.</li>        <li><code>fieldNames</code> : liste des champs à développer dans des colonnes dans la table.</li>        <li><code>newColumnNames</code> : liste des noms de colonne à attribuer aux nouvelles colonnes. Les noms des nouvelles colonnes ne peuvent pas dupliquer une colonne dans la nouvelle table.</li>    </ul>


## Examples

### Example #1 
Développe la colonne [a] dans la table &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; en 3 colonnes &#34; aa &#34;, &#34; bb &#34; et &#34; cc &#34;.
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
