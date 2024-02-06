---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Cria um valor datetime a partir de um número longo de 64 bits.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Cria um valor <code>datetime</code> a partir do valor <code>fileTime</code> e o converte em fuso horário local. O filetime é um valor de hora de arquivo do Windows que representa o número de intervalos de 100 nanossegundos decorridos desde a meia-noite de 1º de janeiro de 1601. (C.E.) Tempo Universal Coordenado (UTC).


## Examples

### Example #1 
Converta &lt;code&gt;129876402529842245&lt;/code&gt; em um valor datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
