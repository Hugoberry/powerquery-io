---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Ustvari vrednost &#34;datetimezone&#34; iz 64 bitov dolgega števila.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Ustvari vrednost <code>datetimezone</code> iz vrednosti <code>fileTime</code> in jo pretvori v lokalni časovni pas. Vrednost "filetime" je vrednost časa datoteke Windows, ki predstavlja 100-nanosekundne intervale, ki so pretekli od polnoči dne 1. januarja 1601 n. š. (C.E.) Coordinated Universal Time (UTC).    


## Examples

### Example #1 
Pretvorite &lt;code&gt;129876402529842245&lt;/code&gt; v vrednost &#34;datetimezone&#34;.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
