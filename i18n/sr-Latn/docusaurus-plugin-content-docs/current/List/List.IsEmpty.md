---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Vraća „true“ ako je lista prazna.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Vraća <code>true</code> ako lista, <code>list</code>, ne sadrži vrednosti (dužina 0). Ako lista sadrži vrednosti (dužina > 0), vraća <code>false</code>.


## Examples

### Example #1 
Pronalaženje da li je lista \{} prazna.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Pronalaženje da li je lista \{1, 2} prazna.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
