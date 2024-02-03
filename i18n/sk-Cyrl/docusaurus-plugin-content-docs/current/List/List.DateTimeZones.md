---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Vygeneruje zoznam hodnôt date s danou počiatočnou hodnotou, počtom a hodnotou prírastku trvania.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Vráti zoznam hodnôt <code>datetimezone</code> s veľkosťou <code>count</code>, počnúc od hodnoty <code>start</code>. Daný prírastok <code>step</code> je hodnota <code>duration</code>, ktorá sa pripočítava ku každej hodnote.


## Examples

### Example #1 
Vytvorte zoznam 10 hodnôt, počnúc 5 minútami pred Novým rokom (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) s prírastkom 1 minúta (#duration(0, 0, 1, 0)).
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
