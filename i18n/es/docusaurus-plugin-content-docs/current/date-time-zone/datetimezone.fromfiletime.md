---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


Crea un datetimezone a partir de un número long de 64 bits.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

Crea un valor <code>datetimezone</code> a partir del valor <code>fileTime</code> y lo convierte a la zona horaria local. Filetime es un valor de hora del archivo de Windows que representa el número de intervalos de 100 nanosegundos que han transcurrido desde las 12:00 de la medianoche del 1 de enero de 1601 a.C. (C.E.), hora universal coordinada (UTC).    


## Examples

### Example #1 
Convertir &lt;code&gt;129876402529842245&lt;/code&gt; en un valor datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
