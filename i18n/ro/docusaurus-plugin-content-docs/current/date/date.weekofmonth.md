---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Returnează un număr de la 1 la 6 care indică în ce săptămână din lună cade această dată.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Returnează un număr de la 1 la 6 care indică în ce săptămână din lună cade data `dateTime`.

-   `dateTime`: O valoare `datetime` pentru care este determinată săptămâna din lună.


## Examples

### Example #1
Determinați în ce săptămână din martie cade data de 15 în 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
