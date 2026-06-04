---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Značí, zda datum spadá do přestupného roku.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Značí, zda předaná hodnota datetime `dateTime` spadá do přestupného roku.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určí, zda je rok 2012 reprezentovaný hodnotou `#date(2012, 01, 01)` přestupný
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
