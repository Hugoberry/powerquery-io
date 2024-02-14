---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Skapar ett datetime-värde från ett 64 bitars tal av typen long.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Skapar ett <code>datetime</code>-värde från <code>fileTime</code>-värdet och konverterar det till den lokala tidszonen. Filetime-värdet är ett Windows-filtidsvärde som representerar antalet intervall om 100 nanosekunder som har förflutit sedan midnatt den 1 januari 1601 e. Kr. (C.E.) Coordinated Universal Time (UTC).


## Examples

### Example #1 
Konvertera &lt;code&gt;129876402529842245&lt;/code&gt; till ett datetime-värde.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
