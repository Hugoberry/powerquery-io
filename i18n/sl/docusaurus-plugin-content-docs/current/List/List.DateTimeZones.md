---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Ustvari seznam vrednosti &#34;datetimezone&#34;, če navedete začetno vrednost, število in prirastno trajanje.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Vrne seznam vrednosti <code>datetimezone</code> velikosti <code>count</code>, ki se začne z <code>start</code>. Dani prirastek, <code>step</code>, je vrednost <code>duration</code>, ki je dodana vsaki vrednosti.


## Examples

### Example #1 
Ustvarite seznam 10 vrednosti, ki se začne 5 minut pred začetkom novega leta (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) in povečuje za 1 minuto (#duration(0, 0, 1, 0)).
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
