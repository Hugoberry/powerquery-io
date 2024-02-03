---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Retourneert het begin van de week.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Retourneert het begin van de week dat <code>dateTime</code>bevat. <code>dateTime</code> moet een <code>datum</code>-, <code>datum/tijd</code>- of <code>datum/tijdzone</code>-waarde zijn.


## Examples

### Example #1 
Het begin van de week zoeken voor dinsdag 11 oktober 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Het begin van de week zoeken voor dinsdag, 11 oktober 2011, met maandag als begin van de week.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
