---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


Cria um valor datetimezone a partir de um número longo de 64 bits.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

Cria um valor `datetimezone` com base no valor `fileTime` e o converte em fuso horário local. O filetime é um valor temporal de arquivo do Windows que representa o número de intervalos de 100 nanossegundos decorridos desde a meia-noite de 1º de janeiro de 1601 D.C. (C.E.) Tempo Universal Coordenado (UTC).


## Examples

### Example #1
Converta `129876402529842245` em um valor datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
