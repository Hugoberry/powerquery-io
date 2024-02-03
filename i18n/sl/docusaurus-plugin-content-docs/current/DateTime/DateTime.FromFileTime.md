---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Ustvari vrednost &#34;datetime&#34; iz 64 bitov dolgega števila.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Ustvari vrednost <code>datetime</code> iz vrednosti <code>fileTime</code> in jo pretvori v lokalni časovni pas. Vrednost "filetime" je vrednost časa datoteke Windows, ki predstavlja 100-nanosekundne intervale, ki so pretekli od polnoči dne 1. januarja 1601 n. š. (C.E.) Coordinated Universal Time (UTC).


## Examples

### Example #1 
Pretvorite &lt;code&gt;129876402529842245&lt;/code&gt; v vrednost &#34;datetime&#34;.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
