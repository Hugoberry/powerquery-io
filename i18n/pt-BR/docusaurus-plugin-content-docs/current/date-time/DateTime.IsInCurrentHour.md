---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indica se este datetime ocorre durante a hora atual, conforme determinado pelo horário e pela data atuais do sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime fornecido <code>dateTime</code> ocorre durante a hora atual, conforme determinado pelo horário e pela data atuais do sistema.      <ul>      <li><code>dateTime</code>: Um valor <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determinar se o horário atual do sistema está na hora atual.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
