---
title: Time.Second
---

# Time.Second


Palauttaa sekuntiosan.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Palauttaa annetun `time`\-, `datetime`\- tai `datetimezone`\-arvon `dateTime` sekuntiosan.


## Examples

### Example #1
Etsi sekuntiarvo päivämäärä ja aika -arvosta.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
