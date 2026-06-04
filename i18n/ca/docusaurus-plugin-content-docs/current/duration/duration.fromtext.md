---
title: Duration.FromText
---

# Duration.FromText


Retorna un valor duration a partir de formes textuals del temps transcorregut (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Retorna un valor de durada a partir del text especificat, `text`. Els formats següents es poden analitzar amb aquesta funció:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Tots els intervals són inclusius)

-   ddd: nombre de dies.
-   hh: nombre d'hores, entre 0 i 23.
-   mm: nombre de minuts, entre 0 i 59.
-   ss: nombre de segons, entre 0 i 59.
-   ff: fraccions de segon, entre 0 i 9999999.


## Examples

### Example #1
Converteix `"2.05:55:20"` en un valor `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
