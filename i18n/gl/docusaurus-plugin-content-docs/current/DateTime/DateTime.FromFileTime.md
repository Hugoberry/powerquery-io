---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Crea unha data e hora a partir dun número longo de 64 bits.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Crea un valor <code>datetime</code> a partir do valor <code>fileTime</code> e convérteo no fuso horario local. Filetime é un valor de tempo de ficheiros de Windows que representa o número de intervalos de 100 nanosegundos transcorridos desde a media noite, ás 00:00, do 1 de xaneiro de 1601 d. c. (C.E.) Hora Universal Coordinada (UTC).


## Examples

### Example #1 
Converter &lt;code&gt;129876402529842245&lt;/code&gt; nun valor de data e hora.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
