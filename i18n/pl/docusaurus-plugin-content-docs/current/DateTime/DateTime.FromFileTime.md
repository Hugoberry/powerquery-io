---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Tworzy wartość typu datetime na podstawie 64-bitowej liczby typu long.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Tworzy wartość typu <code>datetime</code> na podstawie wartości <code>fileTime</code> i konwertuje ją na lokalną strefę czasową. Wartość filetime to wartość godziny pliku systemu Windows odpowiadająca liczbie 100-nanosekundowych interwałów, które upłynęły od godz. 00:00 w dniu 1 stycznia 1601 r. uniwersalnego czasu koordynowanego (UTC).


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;129876402529842245&lt;/code&gt; na wartość typu datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
