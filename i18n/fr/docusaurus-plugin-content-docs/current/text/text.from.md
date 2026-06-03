---
title: Text.From
---

# Text.From


Crée une valeur de texte à partir de la valeur spécifiée.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Retourne la représentation textuelle d’une valeur spécifiée.

-   `value` : la valeur de conversion en texte. La valeur peut être un `nombre`, `date`, `heure`, `datetime`, `datetimezone`, `logique`, `durée` ou une `valeur binaire`. Si la valeur fournie est `null`, cette fonction renvoie `null`.
-   `culture` : (Facultatif) La culture à utiliser lors de la conversion de la valeur en texte (par exemple, « en-US »).


## Examples

### Example #1
Créez une valeur de texte à partir du nombre 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Obtient l’équivalent en texte de la date et de l’heure spécifiées.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Obtient l’équivalent en texte allemand de la date et de l’heure spécifiées.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Obtenez une valeur binaire à partir d’un texte encodé en tant que valeur hexadécimale et remplacez la valeur par du texte.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Obtenez les lignes de la table qui contiennent des données pour la France et convertissez les dates en texte à l’aide de la culture française.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
