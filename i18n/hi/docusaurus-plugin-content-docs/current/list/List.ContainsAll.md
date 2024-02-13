---
title: List.ContainsAll
---

# List.ContainsAll


इंगित करता है कि क्या किसी सूची में किसी दूसरी सूची के सभी मान शामिल हैं.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

इंगित करता है कि क्या किसी सूची <code>list</code> में किसी दूसरी सूची, <code>values</code>, के सभी मान शामिल हैं.    अगर मान, सूची में पाया जाता है, तो true, अन्यथा false लौटाता है. गुणवत्ता परीक्षण नियंत्रित करने के लिए एक वैकल्पिक समीकरण मापदंड मान, <code>equationCriteria</code>, निर्दिष्ट किया जा सकता है. 


## Examples

### Example #1 
सूची \{1, 2, 3, 4, 5} में 3 और 4 होने पर ढूँढें.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
सूची \{1, 2, 3, 4, 5} में 5 और 6 होने पर ढूँढें.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
