---
title: Duration.FromText
---

# Duration.FromText


Devuelve un valor de duración de los formatos de tiempo transcurrido en forma de texto (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Devuelve un valor de duración del texto especificado `text`. Esta función puede analizar los formatos siguientes:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Todos los intervalos son inclusivos)

-   ddd: número de días.
-   hh: número de horas, entre 0 y 23.
-   mm: número de minutos, entre 0 y 59.
-   ss: número de segundos, entre 0 y 59.
-   ff: fracción de segundos, entre 0 y 9999999.


## Examples

### Example #1
Convertir `"2.05:55:20"` en un valor `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
