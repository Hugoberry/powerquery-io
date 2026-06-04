---
title: Duration.FromText
---

# Duration.FromText


Vrátí hodnotu duration z textového formátu uplynulého času (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Vrátí hodnotu trvání z předané textové hodnoty `text`. Pomocí této funkce lze analyzovat následující formáty:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd.hh:mm(:ss(.ff))

(Všechny rozsahy jsou včetně krajních hodnot)

-   ddd: Počet dnů.
-   hh: Počet hodin, mezi 0 a 23.
-   mm: Počet minut, mezi 0 a 59.
-   ss: Počet sekund, mezi 0 a 59.
-   ff: Část sekundy, mezi 0 a 9999999.


## Examples

### Example #1
Převede hodnotu `"2.05:55:20"` na hodnotu `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
