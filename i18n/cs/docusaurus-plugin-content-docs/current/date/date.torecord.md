---
title: Date.ToRecord
---

# Date.ToRecord


Vrátí záznam obsahující části hodnoty date.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Vrátí záznam obsahující části předané hodnoty date `date`.

-   `date`: Hodnota `date`, ze které bude vypočítán záznam jejích částí.


## Examples

### Example #1
Převede hodnotu `#date(2011, 12, 31)` na záznam obsahující části hodnoty date.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
