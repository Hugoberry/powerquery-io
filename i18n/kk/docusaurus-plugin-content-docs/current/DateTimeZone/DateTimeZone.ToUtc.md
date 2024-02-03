---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Уақыт белдеуі құрамдасын UTC уақыт белдеуіне түрлендіреді.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

<code>dateTimeZone</code> күн және уақыт мәнінің уақыт белдеуі ақпаратын UTC немесе әлемдік уақыт белдеуі ақпаратына өзгертеді.    Егер <code>dateTimeZone</code> мәнінде уақыт белдеуі құрамдасы болмаса, UTC уақыт белдеуі туралы ақпарат қосылады.


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) үшін уақыт белдеуі туралы ақпаратты UTC уақыт белдеуіне өзгерту.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
