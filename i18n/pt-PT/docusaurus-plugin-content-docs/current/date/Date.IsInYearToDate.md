---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Indica se esta data ocorre durante o ano atual e se recai no dia atual ou antes dele, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime especificado <code>dateTime</code> ocorre durante o ano atual e se recai no dia atual ou antes dele, conforme determinado pela data e hora atuais no sistema.      <ul>      <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a avaliar.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora do sistema atual ocorre no ano até à data.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
