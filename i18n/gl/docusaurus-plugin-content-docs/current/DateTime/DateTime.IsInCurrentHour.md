---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Indica se esta dataHora se atopa na hora actual, tal e como o determina a hora e data actual do sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Indica se o valor dataHora <code>dateTime</code> fornecido se atopa na hora actual, tal e como o determina a hora e data actual do sistema.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> ou <code>datetimezone</code> a avaliar.</li>      </ul>


## Examples

### Example #1 
Determina se a hora actual do sistema se atopa dentro da hora actual.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
