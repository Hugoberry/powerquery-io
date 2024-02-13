---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


इनपुट मानों की सभी आवृत्तियाँ निकालता है.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

<code>list2</code> में दिए गए मानों की सभी आवृत्तियों को सूची <code>list1</code> से निकालता है. अगर <code>list2</code> के मान <code>list1</code> में मौजूद नहीं हैं, तो मूल सूची को लौटाया जाता है.    गुणवत्ता परीक्षण नियंत्रित करने के लिए एक वैकल्पिक समीकरण मापदंड मान, <code>equationCriteria</code>, निर्दिष्ट किया जा सकता है. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5, 5} से \{1, 5} रहित सूची बनाएँ.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
