---
title: Time.Second
---

# Time.Second


Returnerer sekundkomponenten.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Returnerer sekundkomponenten af den angivne værdi af typen <code>time</code>, <code>datetime</code> eller <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Find sekundværdien i en dato/klokkeslæt-værdi.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
