---
title: List.First
---

# List.First


## Description

Vrátí první hodnotu ze seznamu, nebo určenou výchozí hodnotu, pokud je seznam prázdný.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Vrátí první položku v seznamu <code>list</code> nebo volitelnou výchozí hodnotu <code>defaultValue</code>, pokud je seznam prázdný.    Pokud je seznam prázdný a není určena výchozí hodnota, funkce vrátí hodnotu <code>null</code>.


## Examples

### Example #1 
Zjistí první hodnotu v seznamu \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Zjistí první hodnotu v seznamu \{}. Pokud je seznam prázdný, vrátí -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
