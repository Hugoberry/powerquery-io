---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Indica se esta data ocorre durante a semana atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime especificado <code>dateTime</code> ocorre durante a semana atual, conforme determinado pela data e hora atuais no sistema.      <ul>      <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a avaliar.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora do sistema atual ocorre na semana atual.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
