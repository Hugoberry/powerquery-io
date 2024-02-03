---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Vrátí konec hodiny.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Vrátí konec hodiny, který představuje <code>dateTime</code> včetně zlomkových sekund. Informace o časovém pásmu se zachovají.      <ul>        <li><code>dateTime</code>: Hodnota <code>time</code>, <code>datetime</code> nebo <code>datetimezone</code>, ze které se počítá konec hodiny.</li>      </ul>


## Examples

### Example #1 
Vrátí konec hodiny pro hodnotu 5/14/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Vrátí konec hodiny pro hodnotu 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
