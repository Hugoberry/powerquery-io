---
title: List.Times
---

# List.Times


## Description

Vygeneruje zoznam hodnôt time s danou počiatočnou hodnotou, počtom a hodnotou prírastku trvania.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Vráti zoznam hodnôt <code>time</code> s veľkosťou <code>count</code>, počnúc od hodnoty <code>start</code>. Daný prírastok <code>step</code> je hodnota <code>duration</code>, ktorá sa pripočítava ku každej hodnote.


## Examples

### Example #1 
Vytvorte zoznam 4 hodnôt, počnúc poludním (#time(12, 0, 0)) s prírastkom jedna hodina (#duration(0, 1, 0, 0)).
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
