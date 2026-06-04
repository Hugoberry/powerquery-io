---
title: Duration.FromText
---

# Duration.FromText


Palauttaa kestoarvon tekstimuotoisista kuluneen ajan muodoista (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Palauttaa kestoarvon määritetystä tekstistä `text`. Tämä funktio voi jäsentää seuraavia muotoja:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Kaikkien arvovälien päätearvot sisältyvät alueisiin)

-   ddd: päivien määrä.
-   hh: tuntien määrä, arvo 0–23.
-   mm: minuuttien määrä, arvo 0–59.
-   ss: sekuntien määrä, arvo 0–59.
-   ff: sekunnin murto-osat, arvo 0–9999999.


## Examples

### Example #1
Muunna `"2.05:55:20"` `duration`\-arvoksi.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
