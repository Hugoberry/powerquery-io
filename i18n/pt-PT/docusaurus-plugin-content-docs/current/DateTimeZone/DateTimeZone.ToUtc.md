---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Converte o componente de fuso horário para o fuso horário UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Altera as informações de fuso horário do valor datetime <code>dateTimeZone</code> para as informações de fuso horário UTC ou Hora Universal Coordenada.    Se <code>dateTimeZone</code> não tiver um componente de fuso horário, serão adicionadas as informações de fuso horário UTC.


## Examples

### Example #1 
Alterar informações de fuso horário de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) para fuso horário UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
