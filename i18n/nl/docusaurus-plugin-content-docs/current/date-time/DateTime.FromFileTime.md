---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Maakt een datum-/tijd van een getal dat 64 bits lang is.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Maakt een <code>datetime</code>waarde van de waarde <code>fileTime</code> en zet deze om in de lokale tijdzone. De bestandstijd is een tijdwaarde voor een Windows-bestand die het aantal intervallen van 100 nanoseconden vertegenwoordigt dat is verstreken sinds 0:00 middernacht, 1 januari 1601 A.D. (C.E.) Coordinated Universal Time (UTC).


## Examples

### Example #1 
&lt;code&gt;129876402529842245&lt;/code&gt; omzetten naar een datum-/tijdwaarde.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
