---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Devolve o final da hora.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Devolve o final da hora representada por <code>dateTime</code>, incluíndo fraccións de segundo. Consérvase a información do fuso horario.      <ul>        <li><code>dateTime</code>: Un valor <code>time</code>, <code>datetime</code> ou <code>datetimezone</code> a partir do cal se calcula o final da hora.</li>      </ul>


## Examples

### Example #1 
Obter o final da hora para o 14/05/2011 05:00:00 p.m.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Obter o final da hora para o 17/05/2011 05:00:00 p.m -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
