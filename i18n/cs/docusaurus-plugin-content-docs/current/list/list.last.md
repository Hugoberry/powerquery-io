---
title: List.Last
---

# List.Last


Vrátí poslední hodnotu ze seznamu nebo určenou výchozí hodnotu, pokud je seznam prázdný.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Vrátí poslední položku v zadaném seznamu nebo volitelnou výchozí hodnotu, pokud je seznam prázdný.

-   `list`: Seznam, který se má prozkoumat.
-   `defaultValue`: (Volitelné) Výchozí hodnota, která se má vrátit, pokud je seznam prázdný. Pokud je seznam prázdný a není zadaná výchozí hodnota, vrátí funkce `null`.


## Examples

### Example #1
Vyhledá poslední hodnotu v seznamu \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Vyhledá poslední hodnotu v seznamu \{\} nebo vrátí hodnotu -1, pokud je seznam prázdný.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
