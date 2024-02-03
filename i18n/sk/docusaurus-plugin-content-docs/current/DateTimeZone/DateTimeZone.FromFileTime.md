---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Vytvorí údaj datetimezone zo 64-bitov dlhého čísla.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Vytvorí hodnotu <code>datetimezone</code> z hodnoty <code>fileTime</code> a skonvertuje ju na miestne časové pásmo. Hodnota filetime je hodnota času súboru systému Windows, ktorá predstavuje počet 100-nanosekundových intervalov, ktoré uplynuli od polnoci 1. januára 1601 koordinovaného svetového času (UTC).    


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;129876402529842245&lt;/code&gt; na hodnotu datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
