---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

Indica se este datetime ocorre durante a hora anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na hora atual.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante a hora anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na hora atual.      <ul>      <li><code>dateTime</code>: um valor de <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora antes do horário atual do sistema está na hora anterior.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
