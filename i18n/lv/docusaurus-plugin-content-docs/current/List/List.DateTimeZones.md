---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Tiek ģenerēts datuma, laika un laika joslas vērtību saraksts noteiktai sākotnējai vērtībai, vērtību skaitam un pakāpeniska ilguma palielinājuma vērtībai.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Tiek atgriezts tipa <code>datetimezone</code> vērtību saraksts, kura vērtību skaits ir <code>count</code> un pirmā vērtība ir <code>start</code>. Norādītais palielinājums <code>step</code> ir tipa <code>duration</code> vērtība, kas tiek pieskaitīta katrai saraksta vērtībai.


## Examples

### Example #1 
Izveidojiet 10 vērtību sarakstu, kura pirmā vērtība ir 5 minūtes pirms Jaungada dienas (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) un katra nākamā vērtība ir palielināta par 1 minūti (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
