---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Returnează numele zilei din săptămână.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Returnează numele zilei din săptămână pentru <code>date</code> furnizat. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).


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
