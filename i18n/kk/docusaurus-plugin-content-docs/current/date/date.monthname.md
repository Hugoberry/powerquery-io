---
title: Date.MonthName
---

# Date.MonthName


Ай компонентінің атауын қайтарады.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Берілген `date` үшін ай компонентінің атауын қайтарады. Сонымен қатар қосымша `culture` берілуі мүмкін (мысалы, "en-US").


## Examples

### Example #1
Ай атауын алыңыз.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
