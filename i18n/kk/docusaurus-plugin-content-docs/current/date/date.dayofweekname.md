---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Апта күнінің атауын қайтарады.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Берілген `date` үшін аптаның күні атауын қайтарады. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
Апта күнінің атауын алыңыз.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
