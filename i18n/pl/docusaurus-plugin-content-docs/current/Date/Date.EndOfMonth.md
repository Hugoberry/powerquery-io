---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Zwraca koniec miesiąca.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Zwraca koniec miesiąca, która zawiera <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: wartość typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>, na podstawie której jest obliczany koniec miesiąca.</li>      </ul>


## Examples

### Example #1 
Określ koniec miesiąca dla daty 2011-05-14.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Określ koniec miesiąca dla daty 2011-05-17 17:00:00 -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
