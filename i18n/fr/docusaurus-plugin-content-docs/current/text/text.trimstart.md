---
title: Text.TrimStart
---

# Text.TrimStart


Supprime tous les caractères de début spécifiés.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retourne le résultat de la suppression de tous les caractères de début du/de la `text` spécifié(e). Par défaut, tous les espaces blancs de début sont supprimés.

-   `text` : texte duquel les caractères de début doivent être supprimés.
-   `trim` : remplace les espaces blancs tronqués par défaut. Ce paramètre peut être un caractère unique ou une liste de caractères uniques. Chaque opération de troncature de début s’arrête lorsque le système rencontre un caractère non tronqué.


## Examples

### Example #1
Supprime les espaces de début de "a b c d".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Supprimez les zéros de début de la représentation d’un nombre sous forme de texte.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Supprimez les caractères de remplissage de début d’un nom de compte à largeur fixe.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
