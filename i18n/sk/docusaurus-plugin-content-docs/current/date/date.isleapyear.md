---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Udáva, či tento dátum spadá do priestupného roka.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Udáva, či daná hodnota dátumu a času `dateTime` spadá do priestupného roka.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.


## Examples

### Example #1
Určte, či rok 2012 vyjadrený hodnotou `#date(2012, 01, 01)` je priestupným rokom.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
