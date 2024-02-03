---
title: List.Dates
---

# List.Dates


## Description

Generează o listă de valori date dintr-o valoare iniţială, un număr şi o valoare pentru durată incrementală.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Returnează o listă de valori <code>date</code> de dimensiunea <code>count</code>, începând de la <code>start</code>. Incrementul dat, <code>step</code>, este o valoare <code>duration</code> care este adăugată la fiecare valoare.


## Examples

### Example #1 
Creați o listă de 5 valori începând de la Ajunul Anului Nou (#date(2011, 12, 31)) și incrementând cu 1 zi (#duration(1, 0, 0, 0)).
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
