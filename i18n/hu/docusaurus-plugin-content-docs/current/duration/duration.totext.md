---
title: Duration.ToText
---

# Duration.ToText


A „n.ó:p:s” formátumú szöveget adja vissza.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Az adott időtartam (`duration`) szöveges alakját adja vissza „nap.óra:perc:mp” formában.

-   `duration`: Az az `időtartam`, amelyből a rendszer kiszámolja a szöveges alakot.
-   `format`: *(Nem kötelező)* Elavult, hibát eredményez, ha az értéke nem null.


## Examples

### Example #1
A `#duration(2, 5, 55, 20)` érték konvertálása szöveges értékre
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
