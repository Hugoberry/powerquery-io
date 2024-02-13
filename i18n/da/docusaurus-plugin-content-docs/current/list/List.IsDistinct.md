---
title: List.IsDistinct
---

# List.IsDistinct


Angiver, om listen indeholder dublerede værdier.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Returnerer en logisk værdi, der angiver, om der er dublerede værdier på listen <code>list</code>: <code>true</code>, hvis listen er entydig, og <code>false</code>, hvis der er dublerede værdier. 


## Examples

### Example #1 
Find ud af, om listen \{1, 2, 3} er entydig, dvs. ingen dubletværdier.
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Find ud af, om listen \{1, 2, 3, 3} er entydig, dvs. ingen dubletværdier.
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
