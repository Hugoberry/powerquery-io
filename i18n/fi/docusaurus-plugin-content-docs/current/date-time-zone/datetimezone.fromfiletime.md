---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


Luo datetimezone-arvon 64 bittiä pitkästä numerosta.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

Luo `datetimezone`\-arvon arvosta `fileTime` ja muuntaa sen paikalliseksi aikavyöhykkeeksi. Filetime on Windowsin tiedoston ajan arvo, joka edustaa niiden 100 nanosekunnin aikavälien määrää, jotka ovat kuluneet 1. tammikuuta 1601 (jaa) kello 00.00 UTC-aikaa (Coordinated Universal Time) jälkeen.


## Examples

### Example #1
Muunna `129876402529842245` datetimezone-arvoksi.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
