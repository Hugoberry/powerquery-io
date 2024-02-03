---
title: List.Dates
---

# List.Dates


## Description

Tiek ģenerēts datuma vērtību saraksts noteiktai sākotnējai vērtībai, vērtību skaitam un pakāpeniska ilguma palielinājuma vērtībai.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Tiek atgriezts tipa <code>date</code> vērtību saraksts, kura vērtību skaits ir <code>count</code> un pirmā vērtība ir <code>start</code>. Norādītais palielinājums <code>step</code> ir tipa <code>duration</code> vērtība, kas tiek pieskaitīta katrai saraksta vērtībai.


## Examples

### Example #1 
Izveidojiet 5 vērtību sarakstu, kura pirmā vērtība ir Jaungada priekšvakars (#date(2011, 12, 31)) un katra nākamā vērtība ir palielināta par 1 dienu (#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
