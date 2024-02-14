---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


Maakt een datum-/tijdzone van een getal dat 64 bits lang is.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

Maakt een <code>datetimezone</code>-waarde van de waarde <code>fileTime</code> en zet deze om in de lokale tijdzone. De bestandstijd is een tijdwaarde voor een Windows-bestand dat het aantal intervallen van 100 nanoseconden vertegenwoordigt die zijn verstreken sinds 0:00 middernacht, 1 januari 1601 A.D. (C.E.) Coordinated Universal Time (UTC).     


## Examples

### Example #1 
&lt;code&gt;129876402529842245&lt;/code&gt; omzetten naar een datum-/tijdzonewaarde.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
