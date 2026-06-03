---
title: Text.SplitAny
---

# Text.SplitAny


Retourne une liste de valeurs de texte, fractionnées selon un certain nombre de caractères à l'aide du séparateur.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Renvoie une liste de valeurs textuelles résultant du fractionnement d'une valeur textuelle sur la base d'un caractère spécifié dans le délimiteur.

-   `text` : La valeur de texte à fractionner.
-   `separators` : La valeur de texte à fractionner.


## Examples

### Example #1
Créez une liste à partir du texte donné en utilisant les caractères de délimitation spécifiés.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
