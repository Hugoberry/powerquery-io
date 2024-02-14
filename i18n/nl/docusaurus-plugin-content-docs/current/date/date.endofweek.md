---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Retourneert het einde van de week.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Hiermee wordt het einde van de week in de opgegeven die <code>dateTime</code> bevat.Deze functie gebruikt een optionele <code>Day</code>, <code>firstDayOfWeek</code> om de eerste dag van de week in te stellen voor deze relatieve berekening. De standaardwaarde is <code>Day.Sunday</code>. <ul> <li><code>dateTime</code>: een <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde op basis waarvan de laatste dag van de week wordt berekend</li> <li><code>firstDayOfWeek</code>: <i>[Optioneel]</i> Een <code>Day.Type</code>-waarde die de eerste dag van de week aanduidt. Mogelijke waarden zijn <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> en <code>Day.Saturday.</code>. De standaardwaarde is <code>Day.Sunday</code>.</li> </ul>


## Examples

### Example #1 
Het einde van de week ophalen voor 14/5/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Het einde van de week ophalen voor 17/5/2011 05:00:00 PM -7:00, met zondag als de eerste dag van de week.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
