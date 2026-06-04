---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Pateikiamas skaičius nuo 1 iki 6, rodantis, į kurią mėnesio savaitę patenka data.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Pateikiamas skaičius nuo 1 iki 6, rodantis, į kurią mėnesio savaitę patenka data `dateTime`.

-   `dateTime`: `datetime` reikšmė, kuriai nustatoma mėnesio savaitė.


## Examples

### Example #1
Nustatykite, į kurią savaitę patenka 2011 m. kovo 15 d..
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
