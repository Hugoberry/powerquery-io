---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Indica se este datetime ocorre durante o minuto atual, conforme determinado pelo horário e pela data atuais do sistema.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime fornecido <code>dateTime</code> ocorre durante o minuto atual, conforme determinado pelo horário e pela data atuais do sistema.      <ul>      <li><code>dateTime</code>: Um valor <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determinar se o horário atual do sistema está no minuto atual.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
