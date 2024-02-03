---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Indica se esta dataHora se atopa dentro do segundo actual, tal e como o determina a hora e data actual do sistema.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Indica se o valor dataHora <code>dateTime</code> fornecido se atopa durante o segundo actual, tal e como o determina a hora e data actual do sistema.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> ou <code>datetimezone</code> a avaliar.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora do sistema actual se atopa no segundo actual.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
