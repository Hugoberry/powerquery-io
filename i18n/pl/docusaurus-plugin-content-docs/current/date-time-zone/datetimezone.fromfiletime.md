---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


Tworzy wartość typu datetimezone na podstawie 64-bitowej liczby typu long.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

Tworzy wartość typu `datetimezone` na podstawie wartości `fileTime` i konwertuje ją na lokalną strefę czasową. Wartość filetime to wartość godziny pliku systemu Windows odpowiadająca liczbie 100-nanosekundowych interwałów, które upłynęły od godz. 00:00 w dniu 1 stycznia 1601 r. uniwersalnego czasu koordynowanego (UTC).


## Examples

### Example #1
Przekonwertuj wartość `129876402529842245` na wartość typu datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
