---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Returnează numele zilei din săptămână.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Returnează numele zilei din săptămână pentru `date` furnizat. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”).


## Examples

### Example #1
Obțineți numele zilei din săptămână.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
