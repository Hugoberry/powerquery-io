---
title: Date.Day
---

# Date.Day


Palauttaa päivämääräosan.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Palauttaa `date`\-, `datetime`\- tai `datetimezone`\-arvon päivämääräosan.

-   `dateTime`: `date`\-, `datetime`\- tai `datetimezone`\-arvo, josta päivämääräosa poimitaan.


## Examples

### Example #1
Hae päivämääräosa `date`\-, `datetime`\- tai `datetimezone`\-arvosta, joka edustaa päivämäärää ja aikaa 14.5.2011 17.00.00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
