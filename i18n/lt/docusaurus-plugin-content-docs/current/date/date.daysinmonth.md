---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Pateikiamas skaičius nuo 28 iki 31, rodantis mėnesio dienų skaičių.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Mėnesio dienų skaičius pateikiamas `date`, `datetime` arba `datetimezone` reikšmėje `dateTime`.

-   `dateTime`: `date`, `datetime` arba `datetimezone` reikšmė, kurios mėnesio dienų skaičius pateikiamas.


## Examples

### Example #1
Gruodžio dienų skaičius, pateikiamas `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
