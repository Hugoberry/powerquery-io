---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Returnează sfârșitul lunii.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Returnează sfârșitul lunii care conține `dateTime`.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` din care este calculat sfârșitul lunii.


## Examples

### Example #1
Aflaţi sfârşitul lunii pentru 14/05/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
Aflaţi sfârşitul lunii pentru 17/05/2011 17:00:00 PM – 7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
