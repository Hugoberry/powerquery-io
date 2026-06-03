---
title: Text.Trim
---

# Text.Trim


Supprime tous les caractères de début et de fin spécifiés.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retourne le résultat de la suppression de tous les caractères de début et de fin du/de la `text` spécifié(e). Par défaut, tous les espaces blancs de début et de fin sont supprimés.

-   `text` : texte duquel les caractères de début et de fin doivent être supprimés.
-   `trim` : remplace les espaces blancs tronqués par défaut. Ce paramètre peut être un caractère unique ou une liste de caractères uniques. Chaque opération de troncature de début et de fin s’arrête lorsque le système rencontre un caractère non tronqué.


## Examples

### Example #1
Supprime les espaces de début et de fin de "a b c d".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Supprimez les zéros de début et de fin de la représentation d’un nombre sous forme de texte.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Supprimez les crochets de début et de fin d’une balise HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Supprimez les caractères spéciaux utilisés autour du statut des ventes en attente.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
