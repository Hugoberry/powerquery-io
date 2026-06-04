---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Vrátí číslo značící, do kterého čtvrtletí roku datum spadá.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Vrátí číslo v rozsahu 1 až 4 značící, do kterého čtvrtletí roku spadá datum `dateTime`. `dateTime` může být hodnota `date`, `datetime` nebo `datetimezone`.


## Examples

### Example #1
Zjistí, do kterého čtvrtletí roku spadá datum #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
