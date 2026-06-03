---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Retorna um número (de 0 a 6) que indica o dia da semana do valor fornecido.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Retorna um número (de 0 a 6) que indica o dia da semana do `dateTime` fornecido.

-   `dateTime`: Um valor de `date`, `datetime` ou `datetimezone`.
-   `firstDayOfWeek`: Um valor de `Day` que indica qual dia deve ser considerado como o primeiro dia da semana. Os valores permitidos são Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday ou Day.Saturday. Se o valor não for especificado, um padrão dependente da cultura será usado.


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
Obter o dia da semana representado por segunda-feira, 21 de fevereiro de 2011, tratando a segunda-feira como o primeiro dia da semana.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
