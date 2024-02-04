---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


## Description

Indica se este datetime ocorre durante o número de segundos seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver &#34;falso&#34; quando é transmitido um valor que ocorre no segundo atual.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Indica se o valor do datetime indicado <code>dateTime</code> ocorre durante o próximo número de segundos, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no segundo atual.      <ul>      <li><code>dateTime</code>: um valor <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>seconds</code>: o número de segundos.</li>      </ul>


## Examples

### Example #1 
Determinar se o segundo seguinte à hora do sistema atual ocorre nos dois segundos seguintes.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
