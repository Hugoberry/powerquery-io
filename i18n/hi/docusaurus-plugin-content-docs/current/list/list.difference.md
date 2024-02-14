---
title: List.Difference
---

# List.Difference


दो दी गई सूचियों का अंतर लौटाता है.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

सूची <code>list1</code> के वे आइटम लौटाता है, जो <code>list2</code> सूची में नहीं दिखाई देते हैं. डुप्लिकेट मान समर्थित हैं.    समानता परीक्षण नियंत्रित करने के लिए एक वैकल्पिक समीकरण मानदंड मान <code>equationCriteria</code> निर्दिष्ट किया जा सकता है. 


## Examples

### Example #1 
सूची \{1, 2, 3, 4, 5} में आइटम ढूँढें जो \{4, 5, 3} में दिखाई नहीं देते हैं.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
सूची \{1, 2} के वे आइटम प्राप्त करें जो \{1, 2, 3} नहीं दिखाई देते हैं.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
