---
title: List.Last
---

# List.Last


## Description

सूची का अंतिम मान या रिक्त होने पर निर्दिष्ट डिफ़ॉल्ट लौटाता है.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

सूची <code>list</code> का अंतिम आइटम या सूची रिक्त होने पर वैकल्पिक डिफ़ॉल्ट मान, <code>defaultValue</code>, लौटाता है.    अगर सूची रिक्त है और एक डिफ़ॉल्ट मान निर्दिष्ट नहीं है, तो फ़ंक्शन <code>null</code> लौटाता है.


## Examples

### Example #1 
सूची \{1, 2, 3} का अंतिम मान प्राप्त करें.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
सूची \{} का अंतिम मान या रिक्त होने पर -1 प्राप्त करें.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
