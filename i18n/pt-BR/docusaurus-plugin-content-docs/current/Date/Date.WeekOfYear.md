---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Retorna um número de 1 a 54 que indica em qual semana do ano esta data cairá.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Retorna um número de 1 a 54 que indica em qual semana do ano a data, <code>dateTime</code>, cairá. <ul>        <li><code>dateTime</code>: Um valor <code>datetime</code> para o qual a semana do ano será determinada.</li>        <li><code>firstDayOfWeek</code>: Um valor <code>Day.Type</code> opcional que indica qual dia é considerado o início de uma nova semana (por exemplo, <code>Day.Sunday</code>). Se não for especificado, um padrão dependente de cultura será usado.</li>      </ul>


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
