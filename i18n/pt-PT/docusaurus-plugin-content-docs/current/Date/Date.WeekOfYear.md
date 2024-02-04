---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Devolve um número de 1 a 54 que indica a semana do ano em que esta data recai.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Devolve um número entre 1 a 54 que indica a semana do ano em que a data, <code>dateTime</code>, se insere. <ul>       <li><code>dateTime</code>: A <code>data/hora</code> do valor para o qual a semana-do-ano é determinada.</li>  <li><code>firstDayOfWeek</code>: Um valor de<code>Dia.Tipo</code> opcional que indica qual dos dias é considerado como o início de uma nova semana (por exemplo, <code>Dia.Domingo</code>). Se este não for especificado, será utilizada uma predefinição de cultura dependente.</li>      </ul>


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
