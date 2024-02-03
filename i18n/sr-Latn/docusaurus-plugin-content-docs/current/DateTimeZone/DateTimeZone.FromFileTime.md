---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Kreira datum i vremensku zonu od broja dužine 64 bita.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Kreira <code>datetimezone</code> vrednost od vrednosti <code>fileTime</code> i konvertuje je u lokalnu vremensku zonu. Vrednost filetime je Windows vrednost vremena datoteke koja predstavlja broj intervala od 100 nanosekundi koji su protekli od 12:00 (ponoć), 1. januara 1601. g. naše ere. (C.E.) Koordinisano univerzalno vreme (UTC).    


## Examples

### Example #1 
Konvertovanje &lt;code&gt;129876402529842245&lt;/code&gt; u vrednost datuma i vremenske zone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
