---
title: List.IsEmpty
---

# List.IsEmpty


## Description

अगर सूची रिक्त है, तो true लौटाता है.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

अगर सूची, <code>list</code>, में कोई मान लंबाई 0) नहीं है, तो <code>true</code> लौटाता है. अगर सूची में मान (लंबाई > 0) हैं, तो <code>false</code> लौटाता है.


## Examples

### Example #1 
ढूँढें कि क्या सूची \{} रिक्त है.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
ढूँढें कि क्या सूची \{1, 2} रिक्त है.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
