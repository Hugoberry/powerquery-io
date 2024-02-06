---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Hiermit wird eine Zahl (zwischen 0 und 6) zurückgegeben, die den Tag der Woche für den angegebenen Wert darstellt.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Hiermit wird eine Zahl (zwischen 0 und 6) zurückgegeben, die den Tag der Woche für den angegebenen Wert "<code>dateTime</code>" darstellt.  <ul>        <li><code>dateTime</code>: Ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert.</li>        <li><code>firstDayOfWeek</code>: Ein <code>Day</code>-Wert, der angibt, welcher Tag als erster Tag der Woche betrachtet werden soll. Zulässige Werte: Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday, Day.Saturday. Sofern nicht angegeben, wird der kulturabhängige Standardwert verwendet.</li>      </ul>


## Examples

### Example #1 
Ruft den Tag der Woche für &#34;Montag, 21. Februar 2011&#34; ab. Der Sonntag wird als erster Tag der Woche betrachtet.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Ruft den Tag der Woche für &#34;Montag, 21. Februar 2011&#34; ab. Der Montag wird als erster Tag der Woche betrachtet.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
