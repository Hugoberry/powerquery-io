---
title: List.First
---

# List.First


Vrátí první hodnotu ze seznamu, nebo určenou výchozí hodnotu, pokud je seznam prázdný.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Vrátí první položku v seznamu `list` nebo volitelnou výchozí hodnotu `defaultValue`, pokud je seznam prázdný. Pokud je seznam prázdný a není určena výchozí hodnota, funkce vrátí hodnotu `null`.


## Examples

### Example #1
Zjistí první hodnotu v seznamu \{1, 2, 3\}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Zjistí první hodnotu v seznamu \{\}. Pokud je seznam prázdný, vrátí -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
