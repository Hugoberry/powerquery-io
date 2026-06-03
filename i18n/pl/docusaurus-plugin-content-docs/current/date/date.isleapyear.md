---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Wskazuje, czy ta data wypada w roku przestępnym.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Wskazuje, czy dana wartość typu datetime równa `dateTime` wypada w roku przestępnym.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone` do obliczenia.


## Examples

### Example #1
Ustal, czy rok 2012 reprezentowany przez wartość `#date(2012, 01, 01)` jest rokiem przestępnym.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
