---
title: List.Dates
---

# List.Dates


## Description

Ustvari seznam vrednosti &#34;date&#34;, če navedete začetno vrednost, število in prirastno trajanje.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Vrne seznam vrednosti <code>date</code> velikosti <code>count</code>, ki se začne z <code>start</code>. Dani prirastek, <code>step</code>, je vrednost <code>duration</code>, ki je dodana vsaki vrednosti.


## Examples

### Example #1 
Ustvarite seznam 5 vrednosti, ki se začne na večer pred novim letom (#date(2011, 12, 31)) in povečuje za 1 dan (#duration(1, 0, 0, 0)).
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
