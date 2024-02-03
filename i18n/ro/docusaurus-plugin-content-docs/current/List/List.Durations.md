---
title: List.Durations
---

# List.Durations


## Description

Generează o listă de valori pentru durată dintr-o valoare iniţială, un număr şi o valoare pentru durată incrementală.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Returnează o listă de valori <code>count</code> <code>duration</code>, începând de la <code>start</code> şi crescută cu valoarea <code>duration</code> dată <code>step</code>.


## Examples

### Example #1 
Creați o listă de 5 valori începând de la 1 oră și incrementând cu o oră.
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
