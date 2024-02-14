---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Returnerer et tal fra 1 til 6, der angiver, hvilken uge i måneden denne dato ligger i.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Returnerer et tal fra 1 til 6, der angiver, hvilken uge i året datoen <code>dateTime</code> ligger i. <ul>        <li><code>dateTime</code>: En <code>datetime</code>-værdi, for hvilken ugen i måneden bestemmes.</li>      </ul>


## Examples

### Example #1 
Afgør, hvilken uge den 15. marts falder i i2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
