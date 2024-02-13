---
title: List.Average
---

# List.Average


Gibt den Mittelwert der Werte zurück. Kann mit number-, date-, datetime-, datetimezone- und duration-Werten verwendet werden.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Gibt den Durchschnittswert für die Elemente in der Liste "<code>list</code>" zurück. Das Ergebnis wird im gleichen Datentyp angegeben wie die Werte in der Liste. Kann nur mit number-, date-, time-, datetime-, datetimezone- und duration-Werten verwendet werden.    Ist die Liste leer, wird NULL zurückgegeben.


## Examples

### Example #1 
Ermittelt den Mittelwert der Zahlenliste &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Ermittelt den Mittelwert der folgenden Datumswerte: 1. Januar 2011, 2. Januar 2011 und 3. Januar 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
