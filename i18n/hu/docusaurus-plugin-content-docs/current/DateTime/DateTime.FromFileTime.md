---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Létrehoz egy datetime értéket egy 64 bit hosszúságú számból.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Létrehoz egy <code>datetime</code> értéket a(z) <code>fileTime</code> értékből, és konvertálja azt a helyi időzónára. A filetime érték egy Windows rendszerbeli fájl időpontját jelölő érték, amely az egyezményes világidőben (UTC időzónában) megadott, i. sz. 1601. január 1. 00:00 óta eltelt 100 nanoszekundumos időszakok számát jelzi.


## Examples

### Example #1 
Az &lt;code&gt;129876402529842245&lt;/code&gt; érték konvertálása datetime értékre
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
