---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Повертає число, яке вказує, на який квартал року припадає дата.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Повертає число від 1 до 4, яке вказує, на який квартал року припадає дата <code>dateTime</code>. <code>dateTime</code> може бути значенням <code>date</code>, <code>datetime</code> або <code>datetimezone</code>.


## Examples

### Example #1 
Знайти, на який квартал року припадає дата #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
