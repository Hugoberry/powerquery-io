---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Retorna um número de 1 a 54 que indica em qual semana do ano esta data cairá.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Retorna um número de 1 a 54 que indica em qual semana do ano a data, `dateTime`, cairá.

-   `dateTime`: Um valor `datetime` para o qual a semana do ano será determinada.
-   `firstDayOfWeek`: Um valor `Day.Type` opcional que indica qual dia é considerado o início de uma nova semana (por exemplo, `Day.Sunday`). Se não for especificado, um padrão dependente de cultura será usado.


## Examples

### Example #1
Determine qual semana do ano contém 27 de março de 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Determine qual semana do ano contém 27 de março de 2011, usando segunda-feira como o início da semana.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
