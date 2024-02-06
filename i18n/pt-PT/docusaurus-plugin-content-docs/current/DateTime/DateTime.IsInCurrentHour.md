---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indica se este datetime ocorre durante a hora atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime fornecido <code>dateTime</code> ocorre durante a hora atual, conforme determinado pela data e hora atuais no sistema.      <ul>      <li><code>dateTime</code>: um valor <code>datetime</code>, ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determina se a hora atual do sistema está na hora atual.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
