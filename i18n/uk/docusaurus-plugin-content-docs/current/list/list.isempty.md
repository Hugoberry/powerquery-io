---
title: List.IsEmpty
---

# List.IsEmpty


Повертає значення true, якщо список пустий.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Повертає значення `true`, якщо список, `list`, не містить значень (довжина 0). Якщо список містить значення (довжина > 0), повертає значення `false`.


## Examples

### Example #1
Визначити, чи список \{\} пустий.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Визначити, чи список \{1, 2\} пустий.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
