---
title: Date.MonthName
---

# Date.MonthName


Devolve o nome do compoñente do mes.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Devolve o nome do compoñente de mes para o `date` fornecido. Tamén se pode fornecer unha `culture` opcional (por exemplo, "gl-ES").


## Examples

### Example #1
Obtén o nome do mes.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
