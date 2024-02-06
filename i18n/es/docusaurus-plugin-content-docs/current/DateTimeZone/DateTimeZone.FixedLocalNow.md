---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Devuelve la fecha y la hora actuales en la zona horaria local. Este valor es fijo y no cambiará con las sucesivas llamadas.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Devuelve un valor <code>datetime</code> establecido en la fecha y hora actuales según el sistema. El valor devuelto contiene la información de zona horaria que representa la zona horaria local. Este valor es fijo y no cambiará con las sucesivas llamadas, a diferencia de DateTimeZone.LocalNow, que puede devolver valores distintos durante la ejecución de una expresión.



## Category
DateTimeZone
