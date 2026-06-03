---
title: Duration.FromText
---

# Duration.FromText


Returnerar ett varaktighetsvärde från förfluten tid i textformat (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Returnerar ett varaktighetsvärde från den angivna texten, `text`. Följande format kan parsas av den här funktionen:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Alla intervall är inkluderande)

-   ddd: Antal dagar.
-   hh: Antal timmar, mellan 0 och 23.
-   mm: Antal minuter, mellan 0 och 59.
-   ss: Antal sekunder, mellan 0 och 59.
-   ff: Delar av sekunder, mellan 0 och 9999999.


## Examples

### Example #1
Konvertera `"2.05:55:20"` till ett `duration`\-värde.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
