---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Indica se este datetime ocorre durante a hora anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver &#34;falso&#34; quando é transmitido um valor que ocorre na hora atual.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor do datetime indicado <code>dateTime</code> ocorre durante a hora anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre na hora atual.      <ul>      <li><code>dateTime</code>: um valor <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora antes da hora do sistema atual ocorre na hora anterior.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
