---
title: Date.MonthName
---

# Date.MonthName


## Description

Retorna o componente do nome do mês.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Retorna o nome do componente de mês para o <code>date</code> fornecido. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").


## Examples

### Example #1 
Obtenha o nome do mês.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
