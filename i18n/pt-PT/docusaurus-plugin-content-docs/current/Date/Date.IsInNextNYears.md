---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Indica se esta data ocorre durante o número de anos seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver &#34;falso&#34; quando é transmitido um valor que ocorre no ano atual.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Indica se o valor do datetime indicado <code>dateTime</code> ocorre durante o próximo número de anos, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no ano atual.      <ul>      <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>years</code>: o número de anos.</li>      </ul>


## Examples

### Example #1 
Determinar se o ano a seguir à hora atual no sistema é nos próximos dois anos.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
