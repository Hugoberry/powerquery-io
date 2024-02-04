---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


## Description

Indica se esta data ocorre durante o número de semanas seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver &#34;falso&#34; quando é transmitido um valor que ocorre na semana atual.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Indica se o valor do datetime indicado <code>dateTime</code> ocorre durante o próximo número de semanas, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre na semana atual.      <ul>      <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>weeks</code>: o número de semanas.</li>      </ul>


## Examples

### Example #1 
Determinar se a semana a seguir à hora atual no sistema é nas duas próximas semanas.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
