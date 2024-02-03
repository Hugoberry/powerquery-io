---
title: List.Times
---

# List.Times


## Description

Davus pradinę reikšmę, skaičių ir papildančiąją trukmės reikšmę generuojamas laiko reikšmių sąrašas.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Pateikiamas sąrašas <code>time</code> reikšmių, kurių dydis <code>count</code>, pradedant nuo <code>start</code>. Nurodytas padidėjimas, <code>step</code>, yra <code>duration</code> reikšmė, pridedama prie kiekvienos reikšmės.


## Examples

### Example #1 
Sukurkite 4 reikšmių sąrašą, pradėdami nuo vidurdienio (#time(12, 0, 0)) ir papildydami po vieną valandą (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
