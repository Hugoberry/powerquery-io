---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Vrátí konec roku.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Vrátí konec roku, který obsahuje <code>dateTime</code> včetně zlomkových sekund. Informace o časovém pásmu se zachovají.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, ze které se počítá konec roku.</li> </ul>


## Examples

### Example #1 
Vrátí konec roku pro hodnotu 5/14/2011 05:00:00 PM.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Vrátí konec hodiny pro hodnotu 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
