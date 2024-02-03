---
title: List.Last
---

# List.Last


## Description

Vrátí poslední hodnotu ze seznamu nebo určenou výchozí hodnotu, pokud je seznam prázdný.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Vrátí poslední položku v seznamu <code>list</code> nebo volitelnou výchozí hodnotu <code>defaultValue</code>, pokud je seznam prázdný.    Pokud je seznam prázdný a není určena výchozí hodnota, funkce vrátí hodnotu <code>null</code>.


## Examples

### Example #1 
Vyhledá poslední hodnotu v seznamu \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Vyhledá poslední hodnotu v seznamu \{} nebo vrátí hodnotu -1, pokud je seznam prázdný.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
