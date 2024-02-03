---
title: List.First
---

# List.First


## Description

Vráti prvú hodnotu zoznamu alebo stanovenú predvolenú hodnotu, ak je zoznam prázdny.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Vráti prvú položku v zozname <code>list</code> alebo voliteľnú predvolenú hodnotu <code>defaultValue</code>, ak je zoznam prázdny.    Ak je zoznam prázdny a predvolená hodnota nie je stanovená, funkcia vráti hodnotu <code>null</code>.


## Examples

### Example #1 
Zistite prvú hodnotu v zozname \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Zistite prvú hodnotu v zozname \{}. Ak je zoznam prázdny, vráti sa hodnota –1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
