---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Gibt eine Zahl zwischen 1 und 6 zurück, die angibt, in welcher Woche des Monats dieses Datum liegt.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Gibt eine Zahl zwischen 1 und 6 zurück, die angibt, in welcher Woche des Monats das Datum <code>dateTime</code> liegt. <ul> <li><code>dateTime</code>: Ein <code>datetime</code>Wert, für den die Woche des Monats bestimmt wird.</li></ul>


## Examples

### Example #1 
Bestimmen Sie, auf welche Woche im März 2011 der 15. März fällt.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
