---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Devuelve la fecha y la hora actuales de la zona horaria local.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Devuelve un valor `datetime` establecido en la fecha y hora actuales del sistema.  
  
El valor devuelto por esta función depende de si está ejecutando la consulta en un equipo local o en línea. Por ejemplo, si ejecuta la consulta en un sistema ubicado en la zona horaria del Pacífico de Estados Unidos, Power Query Escritorio devuelve la fecha y hora establecidas en el equipo local. Sin embargo, si ejecuta la consulta en la nube, Power Query Online devuelve la hora UTC porque está leyendo la hora establecida en las máquinas virtuales en la nube, que están establecidas en UTC.


## Examples

### Example #1
Invoque esta función en un equipo local que ejecute Power Query Escritorio.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Invoque esta función en la nube que ejecuta Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
