---
title: List.Single
---

# List.Single


## Description

Returnerar det enstaka listobjektet för en lista med längden ett. Annars genereras ett undantag.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Om det bara finns ett objekt i listan returnerar <code>list</code> det objektet.    Om det finns mer än ett objekt eller om listan är tom, genererar funktionen ett undantag.


## Examples

### Example #1 
Sök efter det enskilda värdet i listan \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Sök efter det enskilda värdet i listan \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
