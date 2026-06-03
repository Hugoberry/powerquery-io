---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Retourneert het einde van het kwartaal.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Retourneert het einde van het kwartaal dat `dateTime`bevat. Informatie over de tijdzone blijft behouden.

-   `dateTime`: een `datum`, `datum/tijd` of `datum/tijdzone` waarmee het einde van het kwartaal wordt berekend.


## Examples

### Example #1
Het einde van het kwartaal zoeken voor 10 oktober, 2011, 8:00 uur.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
