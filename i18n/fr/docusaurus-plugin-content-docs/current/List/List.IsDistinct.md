---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Indique s&#39;il y a des doublons dans la liste.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Retourne une valeur logique s'il existe des doublons dans la liste <code>list</code> ; <code>true</code> si la liste est distincte, <code>false</code> s'il y a des valeurs dupliquées. 


## Examples

### Example #1 
Détermine si la liste \{1, 2, 3} est distincte (c&#39;est-à-dire, sans doublons).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si la liste \{1, 2, 3, 3}est distincte (c&#39;est-à-dire, sans doublons).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
