---
title: Date.Day
---

# Date.Day


Returnerar dagkomponenten.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Returnerar dagkomponenten i ett `date`\-, `datetime`\- eller `datetimezone`\-värde.

-   `dateTime`: Ett `date`\-, `datetime`\- eller `datetimezone`\-värde som dagkomponenten extraheras från.


## Examples

### Example #1
Hämta dagkomponenten i ett `date`\-, `datetime`\- eller `datetimezone`\-värde som representerar datumet och tiden motsvarande den 14 maj 2011 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
