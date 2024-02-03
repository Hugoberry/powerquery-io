---
title: List.AllTrue
---

# List.AllTrue


## Description

अगर सभी व्यंजक true हैं, तो true लौटाता है.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

अगर सूची <code>list</code> के सभी व्यंजक true हैं, तो true लौटाता है.


## Examples

### Example #1 
निर्धारित करें कि क्या सूची \{true, true, 2 &gt; 0} के सभी व्यंजक true हैं.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
निर्धारित करें कि क्या सूची \{true, true, 2 &lt; 0} के सभी व्यंजक true हैं.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
