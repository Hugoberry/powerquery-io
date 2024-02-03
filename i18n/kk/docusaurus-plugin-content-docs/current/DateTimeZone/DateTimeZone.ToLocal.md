---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Уақыт белдеуі құрамдасын жергілікті уақыт белдеуіне түрлендіреді.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

<code>dateTimeZone</code> күн және уақыт белдеуі мәнінің уақыт белдеуі туралы ақпаратын жергілікті уақыт белдеуі туралы ақпаратқа өзгертеді.    Егер <code>dateTimeZone</code> мәнінде уақыт белдеуі құрамдасы болмаса, жергілікті уақыт белдеуі туралы ақпарат қосылады.


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) үшін уақыт белдеуі туралы ақпаратты жергілікті уақыт белдеуіне (PST ескеріп) өзгерту.
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
