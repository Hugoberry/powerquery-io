---
title: Text.Combine
---

# Text.Combine


Concatène une liste de valeurs de texte dans une seule valeur de texte.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Retourne le résultat de la combinaison de la liste de valeurs de texte, `texts`, en une seule valeur de texte. Toutes les valeurs de `nul` présentes dans `texts` sont ignorées. Vous pouvez spécifier un `separator` facultatif utilisé dans le texte combiné final.


## Examples

### Example #1
Combinez les valeurs de texte « Seattle » et « WA ».
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Combinez les valeurs de texte « Seattle » et « WA » séparées par une virgule et un espace.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Combinez les valeurs « Seattle », `nul` et « WA », séparées par une virgule et un espace. (Notez que le `nul` est ignoré.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Combinez le prénom, l’initiale du deuxième prénom (le cas échéant) et le nom de famille pour obtenir le nom complet de la personne.
```powerquery
let
    Source = Table.FromRecords({
        [First Name = "Doug", Middle Initial = "J", Last Name = "Elis"],
        [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew"],
        [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova"]
    }),
    FullName = Table.AddColumn(Source, "Full Name", each Text.Combine({[First Name], [Middle Initial], [Last Name]}, " "))
in
    FullName
```

Result: 
```powerquery
Table.FromRecords({
    [First Name = "Doug", Middle Initial = "J", Last Name = "Elis", Full Name = "Doug J Elis"],
    [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew", Full Name = "Anna M Jorayew"],
    [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova", Full Name = "Rada Mihaylova"]
})
```




## Category
Text.Transformations
