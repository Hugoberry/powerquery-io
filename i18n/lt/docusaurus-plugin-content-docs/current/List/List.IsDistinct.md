---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Nurodoma, ar sąraše yra pasikartojimų.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Pateikiama loginė reikšmė, ar sąraše yra pasikartojimų <code>list</code>; <code>true</code>, jei sąrašas skiriasi, <code>false</code>, jei yra sutampančių reikšmių. 


## Examples

### Example #1 
Sužinokite, ar sąrašas \{1, 2, 3} skiriasi (t. y. nėra pasikartojimų).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Sužinokite, ar sąrašas \{1, 2, 3, 3} skiriasi (t. y. nėra pasikartojimų).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
