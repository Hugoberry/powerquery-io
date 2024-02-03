---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Vrátí konec čtvrtletí.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Vrátí konec čtvrtletí, které obsahuje <code>dateTime</code>. Informace o časovém pásmu se zachovají.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, ze které se počítá konec čtvrtletí.</li>      </ul>


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
