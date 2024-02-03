---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Indica se esta dataHora se atopa no minuto actual, tal e como o determina a hora e data actual do sistema.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Indica se o valor dataHora <code>dateTime</code> fornecido se atopa no minuto actual, tal e como o determina a hora e data actual do sistema.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> ou <code>datetimezone</code> a avaliar.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora do sistema actual se atopa dentro do minuto actual.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
