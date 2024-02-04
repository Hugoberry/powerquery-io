---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Erstellt einen datetimezone-Wert auf der Grundlage einer 64-Bit-Zahl.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Erstellt einen <code>datetimezone</code>-Wert auf der Grundlage des Werts "<code>fileTime</code>" und konvertiert ihn in die lokale Zeitzone. Die Dateizeit ist ein Windows-Dateizeitwert und steht für die Anzahl der verstrichenen 100-Nanosekunden-Intervalle seit dem 1. Januar 1601 n.Chr., 0:00 Uhr (christliche Zeitrechnung), koordinierte Weltzeit (UTC).


## Examples

### Example #1 
Konvertiert &lt;code&gt;129876402529842245&lt;/code&gt; in einen datetimezone-Wert.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
