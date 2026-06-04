---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Ilmaisee, onko tämä päivämäärä karkausvuotena.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Ilmaisee, onko annettu datetime-arvo `dateTime` karkausvuotena.

-   `dateTime`: laskettava `date`\-, `datetime`\- tai `datetimezone`\-arvo.


## Examples

### Example #1
Selvitä, onko vuosi 2012 kohteen `#date(2012, 01, 01)` ilmaisemana karkausvuosi.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
