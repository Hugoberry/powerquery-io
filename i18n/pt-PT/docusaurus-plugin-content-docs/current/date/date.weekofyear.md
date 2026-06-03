---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Devolve um número de 1 a 54 que indica a semana do ano em que esta data recai.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Devolve um número entre 1 a 54 que indica a semana do ano em que a data, `dateTime`, se insere.

-   `dateTime`: A `data/hora` do valor para o qual a semana-do-ano é determinada.
-   `firstDayOfWeek`: Um valor de`Dia.Tipo` opcional que indica qual dos dias é considerado como o início de uma nova semana (por exemplo, `Dia.Domingo`). Se este não for especificado, será utilizada uma predefinição de cultura dependente.


## Examples

### Example #1
Determine que semana do ano contém o dia 27 de março de 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Determine que semana do ano contém o dia 27 de março de 2011, ao utilizar a segunda-feira como o início da semana.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
