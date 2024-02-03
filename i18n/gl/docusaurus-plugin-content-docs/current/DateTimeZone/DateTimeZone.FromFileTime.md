---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Crea un data, hora e fuso a partir dun número longo de 64 bits.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Crea un valor <code>datetimezone</code> a partir do valor <code>fileTime</code> e convérteo no fuso horario local. Filetime é un valor de tempo de ficheiros de Windows que representa o número de intervalos de 100 nanosegundos transcorridos desde a media noite, ás 00:00, do 1 de xaneiro de 1601 d.C. (C.E.) Hora Universal Coordinada (UTC).    


## Examples

### Example #1 
Converter &lt;code&gt;129876402529842245&lt;/code&gt; nun valor data, hora e fuso.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
