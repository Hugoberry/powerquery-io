---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Retourneert het einde van de maand.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Retourneert het einde van de maand die <code>dateTime</code>bevat. <ul> <li><code>dateTime</code>: een <code>datum</code>, <code>datum/tijd</code> of <code>datum/tijdzone</code> waarmee het einde van de maand wordt berekend</li> </ul>


## Examples

### Example #1 
Het einde van de maand ophalen voor 14/5/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Het einde van de maand ophalen voor 17/5/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
