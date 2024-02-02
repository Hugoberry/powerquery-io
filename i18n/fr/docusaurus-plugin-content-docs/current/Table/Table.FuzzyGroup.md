---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


## Description

Regroupe les lignes de la table en fonction de la correspondance approximative des clés.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Details

Regroupe les lignes de <code>table</code> par valeurs de correspondance approximative dans la colonne spécifiée, <code>key</code>, pour chaque ligne.    Pour chaque groupe, un enregistrement est construit contenant les colonnes clés (et leurs valeurs), ainsi que les colonnes agrégées spécifiées par <code>aggregatedColumns</code>.    Cette fonction ne peut pas garantir le retour d’un ordre de lignes fixe.    Un ensemble facultatif de <code>options</code> peut être inclus pour indiquer comment comparer les colonnes clés. Les options sont les suivantes :     <ul><li><code>Culture</code> : Permet de regrouper des enregistrements en fonction de r&#232;gles propres &#224; la culture. Il peut s’agir d’un nom de culture valide. Par exemple, l’option de culture &#171;&#160;ja-JP&#160;&#187; regroupe les enregistrements bas&#233;s sur la culture japonaise. La valeur par d&#233;faut est &quot;&quot;, qui regroupe en fonction d’une culture anglaise dite indiff&#233;rente.</li><li><code>IgnoreCase</code> : Valeur logique (true/false) qui autorise le regroupement de cl&#233;s ne respectant pas la casse. Par exemple, si la valeur est true, &#171;&#160;Raisins&#160;&#187; est group&#233; avec &#171;&#160;raisins&#160;&#187;. La valeur par d&#233;faut est true.</li><li><code>IgnoreSpace</code> : Valeur logique (true/false) qui permet la combinaison de parties de texte afin de trouver des groupes. Par exemple, si la valeur est true, &#171;&#160;Rai sins&#160;&#187; est group&#233; avec &#171;&#160;Raisins&#160;&#187;. La valeur par d&#233;faut est true.</li><li><code>SimilarityColumnName</code> : Nom de la colonne qui montre la similarit&#233; entre une valeur d’entr&#233;e et la valeur repr&#233;sentative de cette entr&#233;e. La valeur par d&#233;faut est null, auquel cas aucune nouvelle colonne pour les similitudes n’est ajout&#233;e.</li><li><code>Threshold</code> : Nombre compris entre 0,00 et 1,00, qui sp&#233;cifie le score de similarit&#233; &#224; partir duquel deux valeurs sont regroup&#233;es.    Par exemple, &#171;&#160;Raisins&#160;&#187; et &#171;&#160;Raiins&#160;&#187; (&#171;&#160;s&#160;&#187; manquant) sont regroup&#233;es uniquement si cette option est d&#233;finie sur une valeur inf&#233;rieure &#224; 0,90.    Un seuil de 1,00 autorise uniquement les correspondances exactes.s
   (Notez qu’une &#171;&#160;correspondance exacte&#160;&#187; approximative ignorera peut-&#234;tre des diff&#233;rences, telles que la casse, l’ordre des mots et la ponctuation).    La valeur par d&#233;faut est 0,80.</li><li><code>TransformationTable</code> : Table qui permet de regrouper des enregistrements en fonction de mappages de valeurs personnalis&#233;s. Elle doit contenir des colonnes &#171;&#160;from&#160;&#187; et &#171;&#160;to&#160;&#187;. Par exemple, &#171;&#160;Grappes&#160;&#187; est regroup&#233; avec &#171;&#160;Raisins&#160;&#187; si une table de transformation est fournie avec la colonne &#171;&#160;from&#160;&#187; contenant &#171;&#160;Grappes&#160;&#187; et la colonne &#171;&#160;to&#160;&#187; contenant &#171;&#160;Raisins&#160;&#187;. Notez que la transformation est appliqu&#233;e &#224; toutes les occurrences du texte dans la table de transformation. Avec la table de transformation ci-dessus, &#171;&#160;Les grappes sont sucr&#233;es&#160;&#187; est &#233;galement regroup&#233; avec &#171;&#160;Les raisins sont sucr&#233;s&#160;&#187;.</li></ul><br />    


## Examples

### Example #1 
Regroupez la table en ajoutant une colonne d&#39;agrégation [Count] qui contient le nombre d&#39;employés dans chaque emplacement (&#34;each Table.RowCount(_))&#34;).
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
