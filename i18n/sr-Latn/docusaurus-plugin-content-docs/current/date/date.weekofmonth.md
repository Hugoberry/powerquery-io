---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Vraća broj od 1 do 6 koji pokazuje u kojoj se sedmici u mesecu ovaj datum nalazi.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Vraća broj od 1 do 6 koji pokazuje u kojoj se sedmici u mesecu datum `dateTime` nalazi.

-   `dateTime`: Vrednost `datetime` za koju se određuje sedmica u mesecu.


## Examples

### Example #1
Odredite koja je sedmica 15. marta 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
