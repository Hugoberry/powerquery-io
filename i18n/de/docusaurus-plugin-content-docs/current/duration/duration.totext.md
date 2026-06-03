---
title: Duration.ToText
---

# Duration.ToText


Gibt den Text im Format "d.h:m:s" zurück.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Gibt eine Textdarstellung im Format „day.hour:mins:sec“ des angegebenen Werts für die Dauer (`duration`) zurück.

-   `duration`: Eine `Dauer`, aus der die Textdarstellung berechnet wird.
-   `format`: *(Optional)* Veraltet, löst einen Fehler aus, wenn nicht NULL.


## Examples

### Example #1
Konvertiert `#duration(2, 5, 55, 20)` in einen Textwert.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
