---
title: List.Dates
---

# List.Dates


Vygeneruje zoznam hodnôt datetimezone s danou počiatočnou hodnotou, počtom a hodnotou prírastku trvania.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Vráti zoznam hodnôt `date` s veľkosťou `count`, počnúc od hodnoty `start`. Daný prírastok `step` je hodnota `duration`, ktorá sa pripočítava ku každej hodnote.


## Examples

### Example #1
Vytvorte zoznam 5 hodnôt, počnúc Silvestrom (#date(2011, 12, 31)) s prírastkom 1 deň (#duration(1, 0, 0, 0)).
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
