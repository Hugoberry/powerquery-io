---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Pateikia mėnesio pabaigą.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Pateikiama mėnesio, kuriame yra <code>dateTime</code>, pabaiga.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė, pagal kurią apskaičiuojama mėnesio pabaiga</li>      </ul>


## Examples

### Example #1 
Gauti 2011 05 14 mėnesio pabaigą.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Gauti 2011 05 17 05:00:00 po pietų -7:00 mėnesio pabaigą.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
