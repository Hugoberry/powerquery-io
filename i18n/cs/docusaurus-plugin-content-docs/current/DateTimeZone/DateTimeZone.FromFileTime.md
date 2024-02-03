---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Vytvoří z čísla dlouhého 64 bitů hodnotu datetimezone.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Vytvoří hodnotu <code>datetimezone</code> z hodnoty <code>fileTime</code> a převede ji na místní časové pásmo. Hodnota filetime je hodnota času souboru systému Windows, která znamená počet intervalů o délce 100 nanosekund, které uplynuly od 00:00 1. ledna 1601 (n. l.) koordinovaného světového času (UTC).    


## Examples

### Example #1 
Převést řetězec &lt;code&gt;129876402529842245&lt;/code&gt; na hodnotu datetimezone
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
