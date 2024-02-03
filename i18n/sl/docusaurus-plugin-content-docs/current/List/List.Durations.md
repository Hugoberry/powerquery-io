---
title: List.Durations
---

# List.Durations


## Description

Ustvari seznam vrednosti &#34;duration&#34;, če navedete začetno vrednost, število in prirastno trajanje.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Vrne seznam vrednosti <code>duration</code> <code>count</code>, ki se začne z <code>start</code> in poveča za dano vrednost <code>duration</code> <code>step</code>.


## Examples

### Example #1 
Ustvarite seznam 5 vrednosti, ki se začne z 1 uro in povečuje za uro.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
