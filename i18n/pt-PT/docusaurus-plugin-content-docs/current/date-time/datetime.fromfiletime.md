---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Cria um datetime a partir de um número longo de 64 bits.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Cria um valor <code>datetime</code> a partir do valor <code>fileTime</code> e converte-o para o fuso horário local. O filetime é um valor de hora do ficheiro do Windows que representa o número de intervalos de 100 nanossegundos decorridos desde as 00:00 de 1 de janeiro de 1601 A.D. (E.C.) Hora Universal Coordenada (UTC).


## Examples

### Example #1 
Converter &lt;code&gt;129876402529842245&lt;/code&gt; num valor datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
