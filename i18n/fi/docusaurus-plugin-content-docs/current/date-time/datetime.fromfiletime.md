---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Luo datetime-arvon 64 bittiä pitkästä numerosta.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Luo `datetime`\-arvon arvosta `fileTime` ja muuntaa sen paikalliseksi aikavyöhykkeeksi. Filetime on Windowsin tiedoston ajan arvo, joka edustaa niiden 100 nanosekunnin aikavälien määrää, jotka ovat kuluneet 1. tammikuuta 1601 (eaa) kello 00.00 UTC-aikaa (Coordinated Universal Time) jälkeen.


## Examples

### Example #1
Muunna `129876402529842245` datetime-arvoksi.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
