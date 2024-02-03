---
title: List.Contains
---

# List.Contains


## Description

इंगित करता है कि क्या सूची में मान है.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

इंगित करता है कि <code>list</code> सूची में <code>value</code> मान शामिल है या नहीं.    यदि मान सूची में पाया जाता है, तो सत्य अन्यथा गलत लौटाता है. समानता परीक्षण नियंत्रित करने के लिए एक वैकल्पिक समीकरण मानदंड मान <code>equationCriteria</code> निर्दिष्ट किया जा सकता है. 


## Examples

### Example #1 
ढूँढें कि क्या सूची \{1, 2, 3, 4, 5} में 3 है.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
ढूँढें कि क्या सूची \{1, 2, 3, 4, 5} में 6 है.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
