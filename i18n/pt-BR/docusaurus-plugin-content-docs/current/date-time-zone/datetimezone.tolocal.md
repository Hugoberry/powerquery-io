---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Converte o componente de fuso horário para o fuso horário local.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Altera as informações de fuso horário do valor datetimezone <code>dateTimeZone</code> para as informações de fuso horário local.    Se <code>dateTimeZone</code> não tiver um componente de fuso horário, as informações de fuso horário local serão adicionadas.


## Examples

### Example #1 
Altere as informações de fuso horário de #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) para o fuso horário local (assumindo o PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
