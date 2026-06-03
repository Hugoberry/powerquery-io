---
title: Duration.FromText
---

# Duration.FromText


Returnerer en varighedsværdi ud fra tekstformlen for forløbet tid (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Returnerer en varighedsværdi ud fra den angivne tekst, `text`. Følgende formater kan fortolkes ved hjælp af denne funktion:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Alle områder er inklusive)

-   ddd: Antal dage.
-   hh: Antal timer mellem 0 og 23.
-   mm: Antal minutter, mellem 0 og 59.
-   ss: Antal sekunder, mellem 0 og 59.
-   ff: Brøkdele af sekunder, mellem 0 og 9999999.


## Examples

### Example #1
Konvertér `"2.05:55:20"` til en værdi af typen `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
