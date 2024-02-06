---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Converte o componente de fuso horário em fuso horário UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Altera as informações de fuso horário do valor datetime <code>dateTimeZone</code> em informações de fuso horário UTC ou Tempo Universal.    Se <code>dateTimeZone</code> não tiver um componente de fuso horário, as informações de fuso horário UTC serão adicionadas.


## Examples

### Example #1 
Altere as informações de fuso horário de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) para fuso horário UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
