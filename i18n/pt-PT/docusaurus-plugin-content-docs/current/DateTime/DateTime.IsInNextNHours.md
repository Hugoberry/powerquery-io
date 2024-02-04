---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Indica se este datetime ocorre durante o número de horas seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver &#34;falso&#34; quando é transmitido um valor que ocorre na hora atual.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Indica se o valor do datetime indicado <code>dateTime</code> ocorre durante o próximo número de horas, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre na hora atual.      <ul>      <li><code>dateTime</code>: um valor <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>hours</code>: o número de horas.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora seguinte à hora do sistema atual ocorre nas duas horas seguintes.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
