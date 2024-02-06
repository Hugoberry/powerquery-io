---
title: Date.StartOfWeek
---

# Date.StartOfWeek


Gibt den Wochenanfang zurück.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Gibt den Beginn der Woche, der <code>dateTime</code> enthält, zurück.      <code>dateTime</code> muss ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert sein.


## Examples

### Example #1 
Suchen Sie den Wochenanfang für die Woche vom Dienstag, 11. Oktober 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Suchen Sie den Wochenanfang für die Woche vom Dienstag, den 11. Oktober 2011, mithilfe von Montag als Beginn der Woche.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
