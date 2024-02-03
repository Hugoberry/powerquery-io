---
title: List.Range
---

# List.Range


## Description

Pateikiamas sąrašo poaibis pradedant nuo poslinkio.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Pateikiamas sąrašo poaibis pradedant nuo poslinkio <code>list</code>. Pasirenkamas parametras, <code>offset</code>, nustato maksimalų elementų skaičių poaibyje.


## Examples

### Example #1 
Raskite poaibį pradedant nuo sąrašo skaičių nuo 1 iki 10 poslinkio 6.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Raskite poaibį, kurio ilgis yra 2, nuo poslinkio 6, nuo sąrašo skaičių nuo 1 iki 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
