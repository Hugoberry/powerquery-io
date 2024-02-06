---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Indica se esta data ocorre durante o segundo atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime fornecido <code>dateTime</code> ocorre durante o segundo atual, conforme determinado pela data e hora atuais no sistema.      <ul>      <li><code>dateTime</code>: um valor <code>datetime</code>, ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora atual do sistema ocorre no segundo atual.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
