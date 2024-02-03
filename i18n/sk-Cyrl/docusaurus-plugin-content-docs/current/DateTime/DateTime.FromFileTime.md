---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Vytvorí dátum a čas zo 64-bitov dlhého čísla.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Vytvorí hodnotu <code>datetime</code> z hodnoty <code>fileTime</code> a skonvertuje ju na miestne časové pásmo. Hodnota filetime je hodnota času súboru systému Windows, ktorá predstavuje počet 100-nanosekundových intervalov, ktoré uplynuli od polnoci 1. januára 1601 (C.E.) koordinovaného svetového času (UTC).


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;129876402529842245&lt;/code&gt; na hodnotu dátumu a času.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
