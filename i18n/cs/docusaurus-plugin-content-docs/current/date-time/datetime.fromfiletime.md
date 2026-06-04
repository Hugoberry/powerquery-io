---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Vytvoří z čísla dlouhého 64 bitů hodnotu datetime.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Vytvoří hodnotu `datetime` z hodnoty `fileTime` a převede ji na místní časové pásmo. Hodnota filetime je hodnota času souboru systému Windows, která znamená počet intervalů o délce 100 nanosekund, které uplynuly od 00:00 1. ledna roku 1601. (C.E.) Koordinovaný světový čas (UTC).


## Examples

### Example #1
Převést řetězec `129876402529842245` na hodnotu datetime
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
