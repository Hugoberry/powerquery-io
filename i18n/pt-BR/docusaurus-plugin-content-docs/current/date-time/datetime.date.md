---
title: DateTime.Date
---

# DateTime.Date


Retorna o componente de data do valor date, datetime ou datetimezone especificado.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Retornará o componente de data do parâmetro `dateTime` se o parâmetro for um valor de `date`, `datetime` ou `datetimezone`, ou `null` se o parâmetro for `null`.


## Examples

### Example #1
Localize o valor date #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
