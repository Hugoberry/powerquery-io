---
title: List.DateTimes
---

# List.DateTimes


## Description

Vygeneruje zoznam hodnôt datetime s danou počiatočnou hodnotou, počtom a hodnotou prírastku trvania.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Vráti zoznam hodnôt <code>datetime</code> s veľkosťou <code>count</code>, počnúc od hodnoty <code>start</code>. Daný prírastok <code>step</code> je hodnota <code>duration</code>, ktorá sa pripočítava ku každej hodnote.


## Examples

### Example #1 
Vytvorte zoznam 10 hodnôt, počnúc 5 minútami pred Novým rokom (#datetime(2011, 12, 31, 23, 55, 0)) s prírastkom 1 minúta (#duration(0, 0, 1, 0)).
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
