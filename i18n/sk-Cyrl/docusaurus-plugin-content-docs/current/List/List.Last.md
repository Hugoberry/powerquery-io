---
title: List.Last
---

# List.Last


## Description

Vráti poslednú hodnotu zoznamu alebo stanovenú predvolenú hodnotu, ak je zoznam prázdny.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Vráti poslednú položku v zozname <code>list</code> alebo voliteľnú predvolenú hodnotu <code>defaultValue</code>, ak je zoznam prázdny.    Ak je zoznam prázdny a predvolená hodnota nie je stanovená, funkcia vráti hodnotu <code>null</code>.


## Examples

### Example #1 
Nájdite poslednú hodnotu v zozname \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Nájdite poslednú hodnotu v zozname \{} alebo hodnotu –1, ak je zoznam prázdny.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
