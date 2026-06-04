---
title: Duration.FromText
---

# Duration.FromText


Vráti hodnotu trvania z textových formátov uplynutého času (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Vráti hodnotu trvania zo zadaného textu `text`. Táto funkcia dokáže analyzovať nasledujúce formáty:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Všetky rozsahy sú vrátane)

-   ddd: Počet dní.
-   hh: Počet hodín od 0 do 23.
-   mm: Počet minút od 0 do 59.
-   ss: Počet sekúnd od 0 do 59.
-   ff: Zlomok sekundy od 0 do 9999999.


## Examples

### Example #1
Konvertujte hodnotu `"2.05:55:20"` na hodnotu `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
