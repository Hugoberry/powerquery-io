---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Opretter en dato og et klokkeslæt ud fra et 64-bit langt tal.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Opretter en værdi for <code>datetime</code> ud fra <code>fileTime</code>-værdien og konverterer den til den lokale tidszone. filetime er en værdi for filklokkeslæt i Windows, der repræsenterer det antal intervaller med 100 nanosekunder, der er gået siden 24:00 midnat, d. 1. januar 1601 A.D. (C.E.) Coordinated Universal Time (UTC).


## Examples

### Example #1 
Konvertér &lt;code&gt;129876402529842245&lt;/code&gt; til en værdi af typen datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
