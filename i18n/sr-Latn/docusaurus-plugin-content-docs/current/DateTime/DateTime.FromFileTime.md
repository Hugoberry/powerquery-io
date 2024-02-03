---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Kreira datum i vreme od broja dužine 64 bita.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Kreira vrednost <code>datetime</code> od vrednosti <code>fileTime</code> i konvertuje je u lokalnu vremensku zonu. Vrednost filetime je Windows vrednost vremena datoteke koja predstavlja broj intervala od 100 nanosekundi koji su protekli od 12:00 (ponoć), 1. januara 1601. g. naše ere. (C.E.) Coordinated Universal Time (UTC vreme).


## Examples

### Example #1 
Konvertovanje &lt;code&gt;129876402529842245&lt;/code&gt; u vrednost datuma i vremena.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
