---
title: Duration.ToText
---

# Duration.ToText


Retourne le texte du format « d.h:m:s ».


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Renvoie une représentation textuelle de la valeur de durée donnée, sous la forme « jour.heure:min:sec », `duration`.

-   `duration` : Une `duration` à partir de laquelle la représentation textuelle est calculée.
-   `format` : *(Facultatif)* Obsolète ; lèvera une erreur s'il n'est pas nul.


## Examples

### Example #1
Convertit `#duration(2, 5, 55, 20)` dans une valeur de texte.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
