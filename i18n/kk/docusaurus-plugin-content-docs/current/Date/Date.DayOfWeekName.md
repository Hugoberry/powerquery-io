---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Апта күнінің атауын қайтарады.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Берілген <code>date</code> үшін аптаның күні атауын қайтарады. Сонымен қатар қосымша <code>culture</code> берілуі мүмкін (мысалы, "en-US").


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
