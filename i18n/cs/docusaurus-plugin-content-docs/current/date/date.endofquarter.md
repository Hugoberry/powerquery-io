---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Vrátí konec čtvrtletí.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Vrátí konec čtvrtletí, které obsahuje `dateTime`. Informace o časovém pásmu se zachovají.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, ze které se počítá konec čtvrtletí.


## Examples

### Example #1
Najděte konec čtvrtletí pro 10. října 2011, 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
