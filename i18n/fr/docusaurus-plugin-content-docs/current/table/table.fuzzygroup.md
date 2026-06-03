---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


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


## Remarks

Regroupe les lignes de `table` par valeurs de correspondance approximative dans la colonne spécifiée, `key`, pour chaque ligne. Pour chaque groupe, un enregistrement est construit contenant les colonnes clés (et leurs valeurs), ainsi que les colonnes agrégées spécifiées par `aggregatedColumns`. Cette fonction ne peut pas garantir le retour d’un ordre de lignes fixe.

Un ensemble facultatif de `options` peut être inclus pour indiquer comment comparer les colonnes clés. Les options sont les suivantes :

-   `Culture` : Permet de regrouper des enregistrements en fonction de règles propres à la culture. Il peut s’agir d’un nom de culture valide. Par exemple, l’option de culture "ja-JP" regroupe les enregistrements basés sur la culture japonaise. La valeur par défaut est "", qui regroupe en fonction d’une culture anglaise dite indifférente.
-   `IgnoreCase` : Valeur logique (true/false) qui autorise le regroupement de clés ne respectant pas la casse. Par exemple, si la valeur est true, "Raisins" est groupé avec "raisins". La valeur par défaut est true.
-   `IgnoreSpace` : Valeur logique (true/false) qui permet la combinaison de parties de texte afin de trouver des groupes. Par exemple, si la valeur est true, "Rai sins" est groupé avec "Raisins". La valeur par défaut est true.
-   `SimilarityColumnName` : Nom de la colonne qui montre la similarité entre une valeur d’entrée et la valeur représentative de cette entrée. La valeur par défaut est null, auquel cas aucune nouvelle colonne pour les similitudes n’est ajoutée.
-   `Threshold` : Nombre compris entre 0,00 et 1,00, qui spécifie le score de similarité à partir duquel deux valeurs sont regroupées. Par exemple, "Raisins" et "Raiins" ("s" manquant) sont regroupées uniquement si cette option est définie sur une valeur inférieure à 0,90. Un seuil de 1,00 autorise uniquement les correspondances exactes. s (Notez qu’une "correspondance exacte" approximative ignorera peut-être des différences, telles que la casse, l’ordre des mots et la ponctuation). La valeur par défaut est 0,80.
-   `TransformationTable` : Table qui permet de regrouper des enregistrements en fonction de mappages de valeurs personnalisés. Elle doit contenir des colonnes "from" et "to". Par exemple, "Grappes" est regroupé avec "Raisins" si une table de transformation est fournie avec la colonne "from" contenant "Grappes" et la colonne "to" contenant "Raisins". Notez que la transformation est appliquée à toutes les occurrences du texte dans la table de transformation. Avec la table de transformation ci-dessus, "Les grappes sont sucrées" est également regroupé avec "Les raisins sont sucrés".


## Examples

### Example #1
Regroupez le tableau en ajoutant une colonne d’agrégation \[Count\] contenant le nombre d’employés par site (`each Table.RowCount(_)`).
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
