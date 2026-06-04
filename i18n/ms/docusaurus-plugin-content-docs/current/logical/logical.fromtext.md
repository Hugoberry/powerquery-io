---
title: Logical.FromText
---

# Logical.FromText


Mencipta nilai logik daripada nilai teks "true" dan "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Mencipta nilai logik daripada nilai teks `text`, sama ada "true" atau "false". Jika `text` mengandungi rentetan yang berbeza, ralat akan dipaparkan. Nilai teks `text` adalah sensitif huruf besar atau kecil.


## Examples

### Example #1
Cipta nilai logik daripada rentetan teks "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Cipta nilai logik daripada rentetan teks "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
