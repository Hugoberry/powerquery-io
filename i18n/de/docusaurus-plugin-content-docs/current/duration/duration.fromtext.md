---
title: Duration.FromText
---

# Duration.FromText


Gibt einen duration-Wert auf der Grundlage von verstrichener Zeit zurück, die im Textformat (d.h:m:s) angegeben wurde.


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Gibt einen duration-Wert auf der Grundlage des angegebenen Texts „`text`“ zurück. Folgende Formate können von dieser Funktion analysiert werden:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Alle Bereiche sind inklusiv)

-   ddd: Anzahl der Tage.
-   hh: Anzahl der Stunden, zwischen 0 und 23.
-   mm: Anzahl der Minuten, zwischen 0 und 59.
-   ss: Anzahl der Sekunden, zwischen 0 und 59.
-   ff: Sekundenbruchteil, zwischen 0 und 9999999.


## Examples

### Example #1
Konvertiert `"2.05:55:20"` in einen `duration`\-Wert.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
