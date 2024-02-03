---
title: List.DateTimes
---

# List.DateTimes


## Description

Davus pradinę reikšmę, skaičių ir papildančiąją trukmės reikšmę generuojamas datetime reikšmių sąrašas.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Pateikiamas sąrašas <code>datetime</code> reikšmių, kurių dydis <code>count</code>, pradedant nuo <code>start</code>. Nurodytas padidėjimas, <code>step</code>, yra <code>duration</code> reikšmė, pridedama prie kiekvienos reikšmės.


## Examples

### Example #1 
Sukurkite 10 reikšmių sąrašą pradėdami nuo 5 minučių iki sausio 1 d. (#datetime(2011, 12, 31, 23, 55, 0)), kuriame pridedama po 1 minutę (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
