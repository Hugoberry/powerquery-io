---
title: List.Times
---

# List.Times


Ustvari seznam vrednosti"time", če navedete začetno vrednost, število in prirastno trajanje.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Vrne seznam vrednosti `time` velikosti `count`, ki se začne z `start`. Dani prirastek, `step`, je vrednost `duration`, ki je dodana vsaki vrednosti.


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
