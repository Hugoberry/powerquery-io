---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Indica se esta data ocorre durante o número de dias anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver &#34;falso&#34; quando é transmitido um valor que ocorre no dia atual.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indica se o valor do datetime indicado <code>dateTime</code> ocorre durante o número de dias anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no dia atual.      <ul>      <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>days</code>: o número de dias.</li>      </ul>


## Examples

### Example #1 
Determinar se o dia anterior à hora atual no sistema é nos dois últimos dias.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
