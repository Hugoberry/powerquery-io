---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Indica se esta data ocorre durante o próximo número de anos, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no ano atual.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o próximo número de anos, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no ano atual.      <ul>      <li><code>dateTime</code>: um valor de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>years</code>: o número de anos.</li>      </ul>


## Examples

### Example #1 
Determina se o ano após a hora atual do sistema é nos próximos dois anos.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
