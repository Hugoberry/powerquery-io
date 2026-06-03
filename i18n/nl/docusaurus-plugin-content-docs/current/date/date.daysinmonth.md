---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Retourneert een getal tussen 28 en 31 dat het aantal dagen in de maand aangeeft.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Hiermee wordt het aantal dagen in de maand geretourneerd in de `date`\-, `datetime`\- of `datetimezone`\-waarde `dateTime`.

-   `dateTime`: een `date`\-, `datetime`\- of `datetimezone`\-waarde waarvoor het aantal dagen in de maand wordt geretourneerd.


## Examples

### Example #1
Aantal dagen in de maand december zoals wordt weergegeven met `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
