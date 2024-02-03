---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Devolve un número de 1 a 54 que indica a semana do ano no que cae esta data.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Devolve un número de 1 a 54 que indica en que día da semana cae a data <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Un valor <code>datetime</code> para o que se determina a semana do ano.</li>        <li><code>firstDayOfWeek</code>: Un valor opcional <code>Day.Type</code> que indica que día se considera o inicio dunha semana nova (por exemplo, <code>Day.Sunday</code>). Se non se especifica, usarase un valor predefinido dependendo da referencia cultural.</li>      </ul>


## Examples

### Example #1 
Determina que semana do ano contén o 27 de marzo de 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Determina que semana do ano contén o 27 de marzo de 2011, utilizando o luns como comezo da semana.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
