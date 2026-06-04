---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


Crea un valor datetimezone a partir d'un nombre llarg de 64 bits.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

Crea un valor `datetimezone` a partir del valor `fileTime` i el converteix en el fus horari local. El valor filetime és un valor d'hora del fitxer del Windows que representa el nombre d'intervals de 100 nanosegons que han transcorregut des de les 12:00 de la nit de l'1 de gener del 1601 dC. (C.E.) Temps universal coordinat (UTC).


## Examples

### Example #1
Converteix `129876402529842245` en un valor datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
