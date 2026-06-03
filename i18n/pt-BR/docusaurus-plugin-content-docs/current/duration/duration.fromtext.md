---
title: Duration.FromText
---

# Duration.FromText


Retorna um valor duration a partir do formato textual de tempo decorrido (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Retorna um valor de duração com base no texto especificado, `text`. Os seguintes formatos podem ser analisados por esta função:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Todos os intervalos são inclusivos)

-   ddd: número de dias.
-   hh: Number of hours, between 0 and 23.
-   mm: Número de minutos, entre 0 e 59.
-   ss: Número de segundos, entre 0 e 59.
-   ff: fração de segundos, entre 0 e 9999999.


## Examples

### Example #1
Converta `"2.05:55:20"` em um valor `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
