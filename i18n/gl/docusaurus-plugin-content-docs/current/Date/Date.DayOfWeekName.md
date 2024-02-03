---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Devolve o nome do día da semana.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Devolve o nome do día da semana para o <code>date</code> fornecido. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Obtén o nome do día da semana.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
