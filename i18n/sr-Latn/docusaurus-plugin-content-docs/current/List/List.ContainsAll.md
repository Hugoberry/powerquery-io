---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Navodi da li lista obuhvata sve vrednosti iz druge liste.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Navodi da li lista <code>list</code> obuhvata sve vrednosti iz druge liste, <code>values</code>.    Vraća „true“ ako se vrednost nalazi na listi. U suprotnom vraća „false“. Može se navesti opcionalna vrednost kriterijuma jednakosti, <code>equationCriteria</code>, radi kontrole testiranja jednakosti. 


## Examples

### Example #1 
Otkrivanje da li lista \{1, 2, 3, 4, 5} sadrži 3 i 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Otkrivanje da li lista \{1, 2, 3, 4, 5} sadrži 5 i 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
