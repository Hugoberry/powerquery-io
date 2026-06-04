---
title: Time.EndOfHour
---

# Time.EndOfHour


Returnează sfârșitul orei.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Returnează sfârșitul orei reprezentat de `dateTime`, inclusiv secundele fracționare. Informațiile legate de fusul orar sunt păstrate.

-   `dateTime`: o valoare `time`, `datetime` sau `datetimezone`, din care este calculat sfârșitul orei.


## Examples

### Example #1
Obţineţi sfârşitul orei pentru 14/05/2011 17:00:00.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Obţineţi sfârşitul orei pentru 17/05/2011 17:00:00 – 7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
