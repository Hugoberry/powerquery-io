---
title: Value.FromText
---

# Value.FromText


Crée une valeur fortement typée à partir d'une représentation de texte.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Décode une valeur d’une représentation textuelle et l’interprète comme une valeur avec un type approprié.

-   `text` : Le texte à interpréter.
-   `culture` : (Facultatif) Une culture spécifique utilisée pour interpréter le texte (par exemple, « en-US »).

Cette fonction prend une valeur de texte et retourne une valeur de type `nombre`, `logique`, `null`, `datetime`, `durée`, ou `texte`. Une valeur de texte vide est interprétée comme une valeur `null`.


## Examples

### Example #1
Convertir un texte représentant un nombre en sa valeur numérique correspondante.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Convertir un texte représentant un pourcentage en sa valeur numérique correspondante.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Convertir le texte représentant une valeur en euros en sa valeur numérique correspondante.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Convertir le texte représentant une date et une heure allemandes en leur valeur de date et d’heure correspondantes.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
