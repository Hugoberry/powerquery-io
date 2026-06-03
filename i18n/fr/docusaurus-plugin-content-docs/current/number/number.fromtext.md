---
title: Number.FromText
---

# Number.FromText


Crée des numéros à partir des formats de texte communs ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Retourne une valeur `number` à partir de la valeur de texte `text` spécifiée.

-   `text` : représentation texte d’une valeur de nombre. La représentation doit être dans un format numérique courant, tel que "15", "3,423.10" ou "5.0E-10".
-   `culture` : une culture facultative qui contrôle la façon dont `text` est interprété (par exemple, "fr-fr").


## Examples

### Example #1
Obtient la valeur de nombre de `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Obtient la valeur de nombre de `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
