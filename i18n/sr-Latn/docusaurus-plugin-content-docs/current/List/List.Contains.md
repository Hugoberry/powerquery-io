---
title: List.Contains
---

# List.Contains


## Description

Navodi da li lista sadrži vrednost.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Navodi da li lista <code>list</code> sadrži vrednost <code>value</code>.    Vraća „true“ ako se vrednost nalazi na listi. U suprotnom vraća „false“. Može se navesti opcionalna vrednost kriterijuma jednakosti, <code>equationCriteria</code>, radi kontrole testiranja jednakosti. 


## Examples

### Example #1 
Otkrivanje da li lista \{1, 2, 3, 4, 5} sadrži 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Otkrivanje da li lista \{1, 2, 3, 4, 5} sadrži 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
