---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Gibt das Ende der Woche zurück.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Gibt das Ende der Woche, das <code>dateTime</code> enthält, zurück.Diese Funktion akzeptiert einen optionalen <code>Day</code>-Wert (<code>firstDayOfWeek</code>), um den ersten Tag der Woche für diese relative Berechnung festzulegen. Der Standardwert lautet <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: Ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert, auf dessen Grundlage der letzte Tag der Woche berechnet wird.</li>        <li><code>firstDayOfWeek</code>: <i>[Optional]</i> Ein <code>Day.Type</code>-Wert, der für den ersten Tag der Woche steht. Mögliche Werte: <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> und <code>Day.Saturday.</code> Der Standardwert lautet<code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Ruft das Ende der Woche für den 14.05.2011 ab.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Ruft das Ende der Woche für den 17.05.2011, 17:00:00 Uhr (-7:00) ab, wobei Sonntag als erster Wochentag festgelegt ist.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
