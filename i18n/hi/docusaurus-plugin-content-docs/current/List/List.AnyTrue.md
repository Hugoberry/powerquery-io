---
title: List.AnyTrue
---

# List.AnyTrue


## Description

अगर कोई भी व्यंजक true है, तो true लौटाता है.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

अगर सूची <code>list</code> का कोई भी व्यंजक true है, तो true लौटाता है.


## Examples

### Example #1 
निर्धारित करें कि क्या सूची \{true, false, 2 &gt; 0} का कोई भी व्यंजक true है.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
निर्धारित करें कि क्या सूची \{2 = 0, false, 2 &lt; 0} का कोई भी व्यंजक true है.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
