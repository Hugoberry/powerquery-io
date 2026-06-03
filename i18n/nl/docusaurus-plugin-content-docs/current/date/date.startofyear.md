---
title: Date.StartOfYear
---

# Date.StartOfYear


Retourneert het begin van het jaar.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Retourneert het begin van het jaar dat `dateTime`bevat. `dateTime` moet een `datum`\-, `datum/tijd`\- of `datum/tijdzone`\-waarde zijn.


## Examples

### Example #1
Het begin van het jaar zoeken voor 10 oktober, 2011, 8:10:32 uur.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
