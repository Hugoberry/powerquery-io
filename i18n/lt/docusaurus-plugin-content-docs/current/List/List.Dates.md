---
title: List.Dates
---

# List.Dates


## Description

Davus pradinę reikšmę, skaičių ir papildančiąją trukmės reikšmę generuojamas datos reikšmių sąrašas.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Pateikiamas sąrašas <code>date</code> reikšmių, kurių dydis <code>count</code>, pradedant nuo <code>start</code>. Nurodytas padidėjimas, <code>step</code>, yra <code>duration</code> reikšmė, pridedama prie kiekvienos reikšmės.


## Examples

### Example #1 
Sukurkite 5 reikšmių sąrašą pradėdami nuo Naujųjų metų išvakarių (#date(2011, 12, 31)) ir pridėdami po 1 dieną(#duration(1, 0, 0, 0)).
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
