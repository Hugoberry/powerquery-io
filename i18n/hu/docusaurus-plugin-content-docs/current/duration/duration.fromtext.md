---
title: Duration.FromText
---

# Duration.FromText


Egy időtartamértéket ad vissza az eltelt idő szöveges alakjaiból (n.ó:p:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Időtartamértéket ad vissza a megadott szövegből: `text`. Ez a függvény a következő formátumokat tudja elemezni:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Beleértve a tartományok szélső értékeit)

-   ddd: Napok száma.
-   hh: Órák száma 0 és 23 között.
-   mm: Percek száma 0 és 59 között.
-   ss: Másodpercek száma 0 és 59 között.
-   ff: Másodperc töredéke 0 és 9 999 999 között.


## Examples

### Example #1
A `"2.05:55:20"` érték konvertálása `duration` értékre
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
