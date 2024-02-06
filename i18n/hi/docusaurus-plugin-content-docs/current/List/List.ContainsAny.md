---
title: List.ContainsAny
---

# List.ContainsAny


इंगित करता है कि क्या किसी सूची में किसी दूसरी सूची का कोई भी मान शामिल है.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

इंगित करता है कि क्या किसी सूची <code>list</code> में किसी दूसरी सूची, <code>values</code>, का कोई भी मान शामिल है.        अगर मान, सूची में पाया जाता है, तो true, अन्यथा false लौटाता है. गुणवत्ता परीक्षण नियंत्रित करने के लिए एक वैकल्पिक समीकरण मापदंड मान, <code>equationCriteria</code>, निर्दिष्ट किया जा सकता है. 


## Examples

### Example #1 
सूची \{1, 2, 3, 4, 5} में 3 या 9 होने पर ढूँढें.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
सूची \{1, 2, 3, 4, 5} में 6 या 7 होने पर ढूँढें.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
