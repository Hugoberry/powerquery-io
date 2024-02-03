---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Returnerer slutningen af timen.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Returnerer slutningen af timen, der repræsenteres af <code>dateTime</code>, herunder brøkdele af sekunder. Oplysninger om tidszone bevares. <ul> <li><code>dateTime</code>: En værdi af typen <code>time</code>, <code>datetime</code> eller <code>datetimezone</code> som  slutning af timen beregnes ud fra.</li> </ul>


## Examples

### Example #1 
Hent timens slutning for 14-05-2011, 17:00:00.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Hent timens slutning for 17-05-2011, 17:00:00 -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
