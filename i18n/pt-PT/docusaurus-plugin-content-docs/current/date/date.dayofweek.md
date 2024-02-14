---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Devolve um número (entre 0 e 6) indicando o dia da semana do valor fornecido.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Devolve um número (entre 0 e 6) a indicar o dia da semana do <code>dateTime</code> fornecido.  <ul>        <li><code>dateTime</code>: um valor de <code>data</code>, <code>datetime</code> ou <code>datetimezone</code>. </li>        <li><code>firstDayOfWeek</code>: um valor de <code>Dia</code> a indicar o dia que deve ser considerado o primeiro dia da semana. Os valores permitidos são Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday, ou Day.Saturday. Se não for especificado, é utilizada uma predefinição dependente de cultura.</li>      </ul>


## Examples

### Example #1 
Obter o dia da semana representado por segunda-feira, 21 de fevereiro de 2011, tratando o domingo como o primeiro dia da semana.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Obter o dia da semana representado por segunda-feira, 21 de fevereiro de 2011, tratando segunda-feira como o primeiro dia da semana.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
