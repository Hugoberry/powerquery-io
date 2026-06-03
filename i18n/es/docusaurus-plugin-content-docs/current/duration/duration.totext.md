---
title: Duration.ToText
---

# Duration.ToText


Devuelve el texto en el formato “d.h:m:s”.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Devuelve una representación textual con el formato "day.hour:mins:sec" del valor de duración especificado, `duration`.

-   `duration`: un `duration` a partir del cual se calcula la representación textual.
-   `format`: *(Opcional)* en desuso, generará un error si no es null.


## Examples

### Example #1
Convertir `#duration(2, 5, 55, 20)` en un valor de texto.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
