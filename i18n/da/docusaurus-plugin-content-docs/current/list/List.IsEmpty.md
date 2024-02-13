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

Returnerer <code>true</code>, hvis listen <code>list</code> ikke indeholder værdier (længden er 0). Hvis listen indeholder værdier (længde > 0), returneres <code>false</code>.


## Examples

### Example #1 
Find ud af, om listen \{} er tom.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Find ud af, om listen \{1, 2} er tom.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
