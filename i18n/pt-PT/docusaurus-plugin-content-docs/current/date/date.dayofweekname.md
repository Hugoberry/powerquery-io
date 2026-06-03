---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Devolve o nome do dia da semana.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Devolve o nome do dia da semana para o `date` fornecido. Pode também ser fornecida uma `culture` opcional (por exemplo, "en-US").


## Examples

### Example #1
Obter o nome do dia da semana.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
