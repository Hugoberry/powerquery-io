---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Létrehoz egy datetimezone értéket egy 64 bit hosszúságú számból.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Létrehoz egy <code>datetimezone</code> értéket a(z) <code>fileTime</code> értékből, és konvertálja azt a helyi időzónára. A filetime érték egy Windows rendszerbeli fájl időpontját jelölő érték, amely az egyezményes világidőben (UTC időzónában) megadott, i. sz. 1601. január 1. 00:00 óta eltelt 100 nanoszekundumos időszakok számát jelzi.    


## Examples

### Example #1 
Az &lt;code&gt;129876402529842245&lt;/code&gt; érték konvertálása datetimezone típusú értékre
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
