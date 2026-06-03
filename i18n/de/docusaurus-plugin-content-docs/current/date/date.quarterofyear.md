---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Gibt eine Zahl zurück, die angibt, in welchem Quartal des Jahres das Datum liegt.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Gibt eine Zahl zwischen eins und vier zurück, die angibt, in welchem Quartal des Jahres das Datum "`dateTime`" liegt. "`dateTime`" kann ein `date`\-, `datetime`\- oder `datetimezone`\-Wert sein.


## Examples

### Example #1
Ermittelt das Quartal des Jahres, in dem das Datum "#date(2011, 12, 31)" liegt.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
