---
title: Date.Day
---

# Date.Day


Atgriež dienas komponentu.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Atgriež `date`, `datetime` vai `datetimezone` vērtības dienas komponentu.

-   `dateTime`: `date`, `datetime` vai `datetimezone` vērtība, no kuras tiek izgūts dienas komponents.


## Examples

### Example #1
Iegūt dienas komponentu `date`, `datetime` vai `datetimezone` vērtībai, kas apzīmē datumu un laiku 14.05.2011. plkst. 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
