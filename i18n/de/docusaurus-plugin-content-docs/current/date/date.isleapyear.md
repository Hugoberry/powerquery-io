---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Gibt an, ob dieses Datum in einem Schaltjahr liegt.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Gibt an, ob der angegebene datetime-Wert "`dateTime`" in einem Schaltjahr liegt.

-   `dateTime`: Ein auszuwertender `date`\-, `datetime`\- oder `datetimezone`\-Wert.


## Examples

### Example #1
Bestimmt, ob das als `#date(2012, 01, 01)` dargestellte Jahr 2012 ein Schaltjahr ist.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
