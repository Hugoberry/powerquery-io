---
title: List.Last
---

# List.Last


Vráti poslednú hodnotu zoznamu alebo stanovenú predvolenú hodnotu, ak je zoznam prázdny.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Vráti poslednú položku v zadanom zozname alebo voliteľnú predvolenú hodnotu, ak je zoznam prázdny.

-   `list`: Zoznam, ktorý sa má preskúmať.
-   `defaultValue`: (Voliteľné) Predvolená hodnota, ktorá sa vráti, ak je zoznam prázdny. Ak je zoznam prázdny a nie je špecifikovaná predvolená hodnota, funkcia vráti `null`.


## Examples

### Example #1
Nájdite poslednú hodnotu v zozname \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Nájdite poslednú hodnotu v zozname \{\} alebo hodnotu –1, ak je zoznam prázdny.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
