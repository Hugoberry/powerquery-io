---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Crea un datetime a partir de un número long de 64 bits.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Crea un valor <code>datetime</code> a partir del valor <code>fileTime</code> y lo convierte a la zona horaria local. El FILETIME es un valor de hora del archivo de Windows que representa el número de intervalos de 100 nanosegundos que han transcurrido desde las 12:00 de la medianoche del 1 de enero de 1601 a.C. (C.E.) Hora universal Coordenada (UTC).


## Examples

### Example #1 
Convertir &lt;code&gt;129876402529842245&lt;/code&gt; en un valor datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
