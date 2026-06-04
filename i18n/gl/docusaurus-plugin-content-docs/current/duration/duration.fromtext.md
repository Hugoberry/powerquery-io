---
title: Duration.FromText
---

# Duration.FromText


Devolve un valor de duración das formas textuais de tempo transcorrido (d.h: m: s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Devolve un valor de duración a partir do texto especificado, `text` . Esta función pode analizar os seguintes formatos:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Todos os rangos son inclusivos)

-   ddd: Número de días.
-   hh: Número de horas, entre 0 e 23.
-   mm: Número de minutos, entre 0 e 59.
-   ss: Número de segundos, entre 0 e 59.
-   ff: Fracción de segundos, entre 0 e 9999999.


## Examples

### Example #1
Converter `"2.05:55:20"` nun valor `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
