---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Указывает, приходится ли эта дата на високосный год.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли указанное значение datetime `dateTime` на високосный год.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, которое необходимо оценить.


## Examples

### Example #1
Определить, является ли 2012 год, представленный `#date(2012, 01, 01)`, високосным.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
