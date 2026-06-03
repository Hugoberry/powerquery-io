---
title: List.IsEmpty
---

# List.IsEmpty


Returnerer true, hvis listen er tom.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Returnerer `true`, hvis listen `list` ikke indeholder værdier (længden er 0). Hvis listen indeholder værdier (længde > 0), returneres `false`.


## Examples

### Example #1
Find ud af, om listen \{\} er tom.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Find ud af, om listen \{1, 2\} er tom.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
