---
title: List.Buffer
---

# List.Buffer


## Description

Utilizează o listă ca zonă tampon.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Utilizează lista <code>list</code> ca zonă tampon în memorie. Rezultatul acestui apel este o listă stabilă.


## Examples

### Example #1 
Creaţi o copie stabilă a listei \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
