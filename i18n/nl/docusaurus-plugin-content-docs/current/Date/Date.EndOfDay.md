---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Retourneert het einde van de dag.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Retourneert het einde van de dag vertegenwoordigd door <code>dateTime</code>. Informatie over de tijdzone blijft behouden. <ul> <li><code>dateTime</code>: een <code>datum</code>, <code>datum/tijd</code> of <code>datum/tijdzone</code> waarmee het einde van de dag wordt berekend.</li> </ul>


## Examples

### Example #1 
Het einde van de dag ophalen voor 14/5/2011 05:00:00 PM.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Het einde van de dag ophalen voor 17/5/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
