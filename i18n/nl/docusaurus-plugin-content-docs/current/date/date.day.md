---
title: Date.Day
---

# Date.Day


Retourneert het daggedeelte.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Hiermee wordt de dagcomponent van een `date`\-, `datetime`\- of `datetimezone`\-waarde geretourneerd.

-   `dateTime`: een `date`\-, `datetime`\- of `datetimezone`\-waarde op basis waarvan de dagcomponent wordt geëxtraheerd.


## Examples

### Example #1
Het daggedeelte van een waarde voor `date`, `datetime` of `datetimezone` ophalen die de datum 14/5/2011 en de tijd 05:00:00 PM vertegenwoordigt.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
