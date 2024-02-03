---
title: List.Times
---

# List.Times


## Description

Generează o listă de valori time dintr-o valoare iniţială, un număr şi o valoare pentru durată incrementală.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Returnează o listă de valori <code>time</code> de dimensiunea <code>count</code>, începând de la <code>start</code>. Incrementul dat, <code>step</code>, este o valoare <code>duration</code> care este adăugată la fiecare valoare.


## Examples

### Example #1 
Creaţi o listă de 4 valori începând de la prânz (#time(12, 0, 0)) crescând cu o oră (#duration(0, 1, 0, 0)).
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
