---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Ottiene i minuti del fuso orario del valore.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Restituisce il componente minuti del fuso orario di un valore 'datetimezone'.

-   `dateTimeZone`: valore `datetimezone` da cui viene estratto il componente dei minuti del fuso orario. Se `dateTimeZone` è `null`, la funzione restituisce `null`.


## Examples

### Example #1
Ottiene il componente dei minuti del fuso orario del valore \`datetimezone\` specificato.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
