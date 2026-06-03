---
title: Duration.FromText
---

# Duration.FromText


Retourneert een duurwaarde uit tekst over verstreken tijd (d.u:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Hiermee wordt een duur-waarde geretourneerd van de opgegeven tekst, `text`. De volgende indelingen kunnen worden geparseerd door deze functie:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Alle bereiken zijn inclusief)

-   ddd: aantal dagen.
-   hh: aantal uur, tussen 0 en 23.
-   mm: aantal minuten, tussen 0 en 59.
-   ss: aantal seconden, tussen 0 en 59.
-   ff: fractie van seconden, tussen 0 en 9999999.


## Examples

### Example #1
Zet `"2.05:55:20"` om naar een `duration`waarde.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
