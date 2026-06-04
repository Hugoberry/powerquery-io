---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Devolve a data e a hora actuais no fuso horario local. Este valor é fixo e non se vai modificar con sucesivas chamadas.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Devolve un valor `datetime` definido como a data e a hora actuais no sistema. O valor devolto contén información do fuso horario que representa o fuso horario local. Este valor é fixo e non se vai modificar con sucesivas chamadas, a diferenza de DateTimeZone.LocalNow, que pode devolver valores distintos durante o transcurso da execución dunha expresión.



## Category
DateTimeZone
