---
title: Time.EndOfHour
---

# Time.EndOfHour


Restituisce la fine dell’ora.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Restituisce la fine dell'ora rappresentata da <code>dateTime</code>, inclusi i secondi frazionari. Le informazioni del fuso orario sono mantenute.      <ul>        <li><code>dateTime</code>: valore <code>time</code>, <code>datetime</code> o <code>datetimezone</code> da cui viene calcolata la fine dell'ora.</li>      </ul>


## Examples

### Example #1 
Ottenere la fine dell&#39;ora per 5/14/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Ottenere la fine dell&#39;ora per 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
