---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Returnerar timmens slut.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Returnerar slutet av timmen som representeras av <code>dateTime</code>, inklusive fraktionella sekunder. Informationen om tidszonen bevaras.      <ul>        <li><code>dateTime</code>: Ett <code>time</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som årets slut beräknas från.</li>      </ul>


## Examples

### Example #1 
Hämta timmens slut för den 14 maj 2011 17:00:00.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Hämta timmens slut för den 17 maj 2011 17:00:00 -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
