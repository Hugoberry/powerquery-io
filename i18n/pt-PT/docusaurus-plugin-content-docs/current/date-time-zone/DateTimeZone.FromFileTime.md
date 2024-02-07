---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


Cria um datetimezone a partir de um número longo de 64 bits.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

Cria um valor <code>datetimezone</code> a partir do valor <code>fileTime</code> e converte-o no fuso horário local. O filetime é um valor de hora do ficheiro do Windows que representa o número de intervalos de 100 nanossegundos decorridos desde as 00:00 de 1 de janeiro de 1601 A.D. (E.C.) Hora Universal Coordenada (UTC).    


## Examples

### Example #1 
Converter &lt;code&gt;129876402529842245&lt;/code&gt; num valor datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
