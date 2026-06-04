---
title: Date.MonthName
---

# Date.MonthName


Returnează numele componentei lună.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Returnează numele componentei month pentru `date` furnizat. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”).


## Examples

### Example #1
Obțineți numele lunii.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
