---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Geeft aan of deze datum in een schrikkeljaar valt.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Hiermee wordt aangegeven of de opgegeven datetime-waarde `dateTime` in een schrikkeljaar ligt.

-   `dateTime`: een `date`\-, `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.


## Examples

### Example #1
Vaststellen of het jaar 2012, zoals wordt weergegeven met `#date(2012, 01, 01)` een schrikkeljaar is.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
