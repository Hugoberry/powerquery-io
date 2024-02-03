---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Retourneert het einde van het jaar.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Retourneert het einde van het jaar dat <code>dateTime</code>bevat, inclusief fractionele seconden. Informatie over de tijdzone blijft behouden. <ul> <li><code>dateTime</code>: een <code>datum</code>, <code>datum/tijd</code> of <code>datum/tijdzone</code> waarmee het einde van het jaar wordt berekend.</li> </ul>


## Examples

### Example #1 
Het einde van het jaar ophalen voor 14/5/2011 05:00:00 PM.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Het einde van het uur ophalen voor 17/5/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
