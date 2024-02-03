---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Vrátí hodnotu True, pokud je seznam prázdný.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Vrátí hodnotu <code>true</code>, pokud seznam <code>list</code> neobsahuje žádné hodnoty (má délku 0). Pokud seznam obsahuje hodnoty (má délku větší než 0), vrátí <code>false</code>.


## Examples

### Example #1 
Zjistí, zda je seznam \{} prázdný.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Zjistí, zda je seznam \{1, 2} prázdný.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
