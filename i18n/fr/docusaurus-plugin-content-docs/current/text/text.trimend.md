---
title: Text.TrimEnd
---

# Text.TrimEnd


Supprime tous les caractères de fin spécifiés.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retourne le résultat de la suppression de tous les caractères de fin du/de la `text` spécifié(e). Par défaut, tous les espaces blancs de fin sont supprimés.

-   `text` : texte duquel les caractères de fin doivent être supprimés.
-   `trim` : remplace les espaces blancs tronqués par défaut. Ce paramètre peut être un caractère unique ou une liste de caractères uniques. Chaque opération de troncature de fin s’arrête lorsque le système rencontre un caractère non tronqué.


## Examples

### Example #1
Supprime les espaces de fin de "a b c d".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Supprimez les zéros de fin d’une représentation d’un nombre à virgule flottante remplie sous forme de texte.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Supprimez les caractères de remplissage de fin d’un nom de compte à largeur fixe.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
