---
title: Duration.ToText
---

# Duration.ToText


Palauttaa tekstin muodossa "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Palauttaa tekstiesityksen annetusta kestoarvosta `duration` muodossa päivä.tunti:minuutti:sekunti.

-   `duration`: `duration`, josta tekstiesitys lasketaan.
-   `format`: *(Valinnainen)* Vanhentunut, aiheuttaa virheen, jos se ei ole tyhjäarvo.


## Examples

### Example #1
Muunna `#duration(2, 5, 55, 20)` tekstiarvoksi.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
