---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Pateikia valandos pabaigą.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Pateikiama valandos, pateikiamos <code>dateTime</code> (įskaitant sekundės dalis), pabaiga. Išsaugoma laiko juostos informacija.      <ul>        <li><code>dateTime</code>: <code>time</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė, pagal kurią apskaičiuojama valandos pabaiga.</li>      </ul>


## Examples

### Example #1 
Gaukite 2011 05 14 05:00:00 po pietų valandos pabaigą.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Gaukite 2011 05 17 17:00:00 valandos pabaigą -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
