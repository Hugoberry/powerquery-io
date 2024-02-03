---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Pateikiamas skaičius nuo 1 iki 6, rodantis, į kurią mėnesio savaitę patenka data.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Pateikiamas skaičius nuo 1 iki 6, rodantis, į kurią mėnesio savaitę patenka data <code>dateTime</code>. <ul>        <li><code>dateTime</code>: <code>datetime</code> reikšmė, kuriai nustatoma mėnesio savaitė.</li>      </ul>


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
