---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

Ajoute une nouvelle colonne avec les valeurs représentatives obtenues par les valeurs de regroupement probable de la colonne spécifiée dans la table.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Details

Ajoute une nouvelle colonne <code>newColumnName</code> à <code>table</code> avec des valeurs représentatives de <code>columnName</code>. Les valeurs représentatives sont obtenues par correspondance approximative des valeurs dans <code>columnName</code>, pour chaque ligne.    Un ensemble facultatif de <code>options</code> peut être inclus pour indiquer comment comparer les colonnes clés. Les options sont les suivantes :     <ul><li><code>Culture</code> : Permet de regrouper des enregistrements en fonction de r&#232;gles propres &#224; la culture. Il peut s’agir d’un nom de culture valide. Par exemple, l’option de culture &#171;&#160;ja-JP&#160;&#187; regroupe les enregistrements bas&#233;s sur la culture japonaise. La valeur par d&#233;faut est &quot;&quot;, qui regroupe en fonction d’une culture anglaise dite indiff&#233;rente.</li><li><code>IgnoreCase</code> : Valeur logique (true/false) qui autorise le regroupement de cl&#233;s ne respectant pas la casse. Par exemple, si la valeur est true, &#171;&#160;Raisins&#160;&#187; est group&#233; avec &#171;&#160;raisins&#160;&#187;. La valeur par d&#233;faut est true.</li><li><code>IgnoreSpace</code> : Valeur logique (true/false) qui permet la combinaison de parties de texte afin de trouver des groupes. Par exemple, si la valeur est true, &#171;&#160;Rai sins&#160;&#187; est group&#233; avec &#171;&#160;Raisins&#160;&#187;. La valeur par d&#233;faut est true.</li><li><code>SimilarityColumnName</code> : Nom de la colonne qui montre la similarit&#233; entre une valeur d’entr&#233;e et la valeur repr&#233;sentative de cette entr&#233;e. La valeur par d&#233;faut est null, auquel cas aucune nouvelle colonne pour les similitudes n’est ajout&#233;e.</li><li><code>Threshold</code> : Nombre compris entre 0,00 et 1,00, qui sp&#233;cifie le score de similarit&#233; &#224; partir duquel deux valeurs sont regroup&#233;es.    Par exemple, &#171;&#160;Raisins&#160;&#187; et &#171;&#160;Raiins&#160;&#187; (&#171;&#160;s&#160;&#187; manquant) sont regroup&#233;es uniquement si cette option est d&#233;finie sur une valeur inf&#233;rieure &#224; 0,90.    Un seuil de 1,00 autorise uniquement les correspondances exactes.s
   (Notez qu’une &#171;&#160;correspondance exacte&#160;&#187; approximative ignorera peut-&#234;tre des diff&#233;rences, telles que la casse, l’ordre des mots et la ponctuation).    La valeur par d&#233;faut est 0,80.</li><li><code>TransformationTable</code> : Table qui permet de regrouper des enregistrements en fonction de mappages de valeurs personnalis&#233;s. Elle doit contenir des colonnes &#171;&#160;from&#160;&#187; et &#171;&#160;to&#160;&#187;. Par exemple, &#171;&#160;Grappes&#160;&#187; est regroup&#233; avec &#171;&#160;Raisins&#160;&#187; si une table de transformation est fournie avec la colonne &#171;&#160;from&#160;&#187; contenant &#171;&#160;Grappes&#160;&#187; et la colonne &#171;&#160;to&#160;&#187; contenant &#171;&#160;Raisins&#160;&#187;. Notez que la transformation est appliqu&#233;e &#224; toutes les occurrences du texte dans la table de transformation. Avec la table de transformation ci-dessus, &#171;&#160;Les grappes sont sucr&#233;es&#160;&#187; est &#233;galement regroup&#233; avec &#171;&#160;Les raisins sont sucr&#233;s&#160;&#187;.</li></ul><br />    


## Examples

### Example #1 
Recherchez les valeurs représentatives correspondant à l’emplacement des employés.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
