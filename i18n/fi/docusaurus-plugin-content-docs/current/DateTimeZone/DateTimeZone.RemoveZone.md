---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Poistaa aikavyöhyketiedot annetusta datetimezone-arvosta.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Palauttaa #datetime-arvon kohteesta <code>dateTimeZone</code> niin, että aikavyöhyketiedot on poistettu.


## Examples

### Example #1 
Poista aikavyöhyketiedot arvosta #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
