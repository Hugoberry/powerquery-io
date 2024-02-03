---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Повертає значення true, якщо список пустий.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Повертає значення <code>true</code>, якщо список, <code>list</code>, не містить значень (довжина 0). Якщо список містить значення (довжина > 0), повертає значення <code>false</code>.


## Examples

### Example #1 
Визначити, чи список \{} пустий.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Визначити, чи список \{1, 2} пустий.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
