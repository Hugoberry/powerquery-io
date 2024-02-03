---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Palauttaa kuukauden lopun.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Palauttaa <code>dateTime</code>sisältävän kuukauden lopun. <ul> <li><code>dateTime</code>: <code>päivämäärä</code> <code>datetime</code> tai <code>datetimezone</code> arvo, josta kuukauden loppu lasketaan</li> </ul>


## Examples

### Example #1 
Hae kuukauden loppu kohteelle 14.5.2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Hae kuukauden loppu kohteelle 17.5.2011 17.00.00 -7.00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
