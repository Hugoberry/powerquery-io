---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


## Description

Indica se este datetime ocorre durante o segundo anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver &#34;falso&#34; quando é transmitido um valor que ocorre no segundo atual.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Details

Indica se o valor do datetime indicado <code>dateTime</code> ocorre durante o segundo anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no segundo atual.      <ul>      <li><code>dateTime</code>: um valor <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determinar se o segundo antes da hora do sistema atual ocorre no segundo anterior.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
