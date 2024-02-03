---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Opretter en datetimezone ud fra et 64-bit langt tal.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Opretter en værdi for <code>datetimezone</code> ud fra <code>fileTime</code>-værdien og konverterer den til den lokale tidszone. Værdien filetime er en værdi for filklokkeslæt i Windows, der repræsenterer det antal intervaller á 100 nanosekunder, der er gået siden 24:00 midnat, d. 1. januar 1601 A.D. (C.E.) Coordinated Universal Time (UTC).    


## Examples

### Example #1 
Konvertér &lt;code&gt;129876402529842245&lt;/code&gt; til en værdi af typen datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
