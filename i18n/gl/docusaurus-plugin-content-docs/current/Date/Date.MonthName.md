---
title: Date.MonthName
---

# Date.MonthName


## Description

Devolve o nome do compoñente do mes.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Devolve o nome do compoñente de mes para o <code>date</code> fornecido. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").


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
