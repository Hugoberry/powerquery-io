---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


Joint les lignes de deux tables qui correspondent approximativement en fonction des clés spécifiées.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Joint les lignes de `table1` aux lignes de `table2` en fonction de la correspondance approximative des valeurs des colonnes clés sélectionnées par `key1` (pour `table1`) et par `key2` (pour `table2`).

La correspondance approximative est une comparaison basée sur la similarité du texte plutôt que sur l'égalité du texte.

Par défaut, une jointure interne est effectuée, mais vous pouvez inclure une jointure `joinKind` facultative pour spécifier le type de jointure. Parmi les options, citons :

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Un ensemble facultatif de `joinOptions` peut être inclus pour spécifier comment comparer les colonnes clés. Parmi les options, citons :

-   `ConcurrentRequests` : Nombre compris entre 1 et 8, qui spécifie le nombre de threads parallèles à utiliser pour la correspondance approximative. La valeur par défaut est 1.
-   `Culture` : Permet la mise en correspondance des enregistrements en fonction de règles propres à la culture. Il peut s’agir d’un nom de culture valide. Par exemple, l’option de culture "ja-JP" met en correspondance les enregistrements basés sur la culture japonaise. La valeur par défaut est "", qui met en correspondance en fonction d’une culture anglaise dite indifférente.
-   `IgnoreCase` : Valeur logique (true/false) qui autorise la correspondance de clés qui ne respectent pas la casse. Par exemple, si la valeur est true, "Raisins" est mis en correspondance avec "raisins". La valeur par défaut est true.
-   `IgnoreSpace` : Valeur logique (true/false) qui permet la combinaison de parties de texte afin de trouver des correspondances. Par exemple, si la valeur est true, "Rai sins" correspond à "Raisins". La valeur par défaut est true.
-   `NumberOfMatches` : Nombre entier qui spécifie le nombre maximal de lignes correspondantes qui peuvent être retournées pour chaque ligne d’entrée. Par exemple, la valeur 1 retourne au plus une ligne correspondante pour chaque ligne d’entrée. Si cette option n’est pas spécifiée, toutes les lignes correspondantes sont retournées.
-   `SimilarityColumnName` : Nom de la colonne qui montre la similarité entre une valeur d’entrée et la valeur représentative de cette entrée. La valeur par défaut est null, auquel cas aucune nouvelle colonne pour les similitudes n’est ajoutée.
-   `Threshold` : Nombre compris entre 0,00 et 1,00, qui spécifie le score de similarité à partir duquel deux valeurs sont mises en correspondance. Raisins Par exemple, "Raisins" et "Raiins" ("s" manquant) correspondent uniquement si cette option est définie sur une valeur inférieure à 0,90. Un seuil de 1,00 autorise uniquement les correspondances exactes. s (Notez qu’une "correspondance exacte" approximative ignorera peut-être des différences, telles que la casse, l’ordre des mots et la ponctuation). La valeur par défaut est 0,80.
-   `TransformationTable` : Table qui permet de mettre en correspondance des enregistrements en fonction de mappages de valeurs personnalisés. Elle doit contenir des colonnes "from" et "to". Par exemple, "Grappes" est mis en correspondance avec "Raisins" si une table de transformation est fournie avec la colonne "from" contenant "Grappes" et la colonne "to" contenant "Raisins". Notez que la transformation est appliquée à toutes les occurrences du texte dans la table de transformation. Avec la table de transformation ci-dessus, "Les grappes sont sucrées" est également mis en correspondance avec "Les raisins sont sucrés".


## Examples

### Example #1
Jointure approximative interne gauche de deux tables basées sur \[FirstName\]
```powerquery
Table.FuzzyJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 1,
        FirstName2 = "Bob",
        State = "TX"
    ],
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 2,
        FirstName2 = "bOB",
        State = "CA"
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        CustomerStateID = null,
        FirstName2 = null,
        State = null
    ]
})
```




## Category
Table.Transformation
