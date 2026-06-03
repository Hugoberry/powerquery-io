---
title: List.Distinct
---

# List.Distinct


Retourne une liste de valeurs avec des doublons supprimés.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retourne une liste qui contient toutes les valeurs de la liste spécifiée avec les doublons supprimés. Si la liste spécifiée est vide, le résultat est une liste vide.

-   `list` : La liste à partir de laquelle les valeurs distinctes sont extraites.
-   `equationCriteria` : (Facultatif) Spécifie comment l'égalité est déterminée lors de la comparaison des valeurs. Ce paramètre peut être une fonction de sélecteur de clé, une fonction de comparaison, ou une liste contenant à la fois un sélecteur de clé et un comparateur.


## Examples

### Example #1
Supprimer les doublons dans la liste \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
En partant de la fin de la liste, sélectionnez les fruits dont la longueur de texte est unique.
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
En partant du début de la liste, sélectionnez les fruits uniques en ignorant la casse.
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
Extraire d'une liste de listes les premières listes avec des noms de pays uniques en ignorant la casse. Placez les listes extraites dans les lignes d’une nouvelle table.
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
