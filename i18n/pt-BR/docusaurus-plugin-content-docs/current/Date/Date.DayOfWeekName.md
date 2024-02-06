---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Retorna o nome do dia da semana.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Retorna o dia do nome da semana para o <code>date</code> fornecido. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").


## Examples

### Example #1 
Obtenha o nome do dia da semana.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
