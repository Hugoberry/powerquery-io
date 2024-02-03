---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Značí, zda seznam obsahuje duplicitní hodnoty.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Vrátí logickou hodnotu, která značí, zda seznam obsahuje duplicitní hodnoty <code>list</code>. Pokud seznam obsahuje pouze jedinečné hodnoty, vrátí hodnotu <code>true</code>. Pokud seznam obsahuje duplicitní hodnoty, vrátí hodnotu <code>false</code>. 


## Examples

### Example #1 
Zjistí, zda seznam \{1, 2, 3} obsahuje pouze jedinečné hodnoty (tj., zda neobsahuje žádné duplikáty).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Zjistí, zda seznam \{1, 2, 3, 3} obsahuje pouze jedinečné hodnoty (tj., zda neobsahuje žádné duplikáty).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
