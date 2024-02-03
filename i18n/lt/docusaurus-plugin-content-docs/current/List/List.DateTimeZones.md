---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Davus pradinę reikšmę, skaičių ir papildančiąją trukmės reikšmę generuojamas datetimezone reikšmių sąrašas.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Pateikiamas sąrašas <code>datetimezone</code> reikšmių, kurių dydis <code>count</code>, pradedant nuo <code>start</code>. Nurodytas padidėjimas, <code>step</code>, yra <code>duration</code> reikšmė, pridedama prie kiekvienos reikšmės.


## Examples

### Example #1 
Sukurkite 10 reikšmių sąrašą pradėdami nuo 5 minučių iki sausio 1 d. (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)), kuriame pridedama po 1 minutę (#duration(0, 0, 1, 0)).
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
