---
title: List.Times
---

# List.Times


## Description

Ustvari seznam vrednosti &#34;time&#34;, če navedete začetno vrednost, število in prirastno trajanje.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Vrne seznam vrednosti <code>time</code> velikosti <code>count</code>, ki se začne z <code>start</code>. Dani prirastek, <code>step</code>, je vrednost <code>duration</code>, ki je dodana vsaki vrednosti.


## Examples

### Example #1 
Ustvarite seznam 4 vrednosti, ki se začne opoldne (#time(12, 0, 0)) in povečuje za eno uro (#duration(0, 1, 0, 0)).
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
