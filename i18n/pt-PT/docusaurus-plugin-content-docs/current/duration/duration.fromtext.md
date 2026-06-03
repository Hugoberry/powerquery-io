---
title: Duration.FromText
---

# Duration.FromText


Devolve um valor de duração a partir de formatos de tempo decorrido textuais (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Devolve um valor de duração a partir do texto especificado, `text`. Os seguintes formatos podem ser analisados por esta função:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Todos os intervalos são inclusivos)

-   ddd: número de dias.
-   hh: número de horas, entre 0 e 23.
-   mm: número de minutos, entre 0 e 59.
-   ss: número de segundos, entre 0 e 59.
-   ff: fração de segundos, entre 0 e 9999999.


## Examples

### Example #1
Converter `"2.05:55:20"` num valor `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
