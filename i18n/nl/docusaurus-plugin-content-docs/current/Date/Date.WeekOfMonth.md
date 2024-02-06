---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Retourneert een getal tussen 1 en 6 dat aangeeft in welke week van de maand deze datum valt.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Retourneert een getal tussen 1 en 6 dat aangeeft in welke week van de maand de datum <code>dateTime</code> valt. <ul> <li><code>dateTime</code>: een <code>datetime</code>-waarde waarvoor de week van de maand wordt bepaald.</li></ul>


## Examples

### Example #1 
Bepalen in welke week 15 maart valt in 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
