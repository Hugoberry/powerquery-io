---
title: Duration.ToText
---

# Duration.ToText


Restituisce il testo nel formato "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Restituisce una rappresentazione testuale nel formato "day.hour:mins:sec" del valore di durata specificato `duration`.

-   `duration`: un valore `duration` da cui viene calcolata la rappresentazione testuale.
-   `format`: *(facoltativo)* deprecato, genererà un errore se non è null.


## Examples

### Example #1
Converte `#duration(2, 5, 55, 20)` in un valore di testo.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
