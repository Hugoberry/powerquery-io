---
title: List.IsDistinct
---

# List.IsDistinct


इंगित करता है कि क्या सूची में डुप्लिकेट हैं.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

सूची <code>list</code> में जहाँ भी डुप्लिकेट होते हैं वहाँ एक लॉजिकल मान लौटाता है; <code>true</code> अगर सूची विशिष्ट है, <code>false</code> अगर इसमें डुप्लिकेट मान हैं. 


## Examples

### Example #1 
ढूँढें कि क्या सूची \{1, 2, 3} विशिष्ट (अर्थात्, कोई डुप्लिकेट नहीं) है.
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
ढूँढें कि क्या सूची \{1, 2, 3, 3} विशिष्ट (अर्थात्, कोई डुप्लिकेट नहीं) है.
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
