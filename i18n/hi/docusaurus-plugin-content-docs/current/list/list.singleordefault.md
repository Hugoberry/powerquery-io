---
title: List.SingleOrDefault
---

# List.SingleOrDefault


लंबाई एक की सूची के लिए एक सूची आइटम और एक रिक्त सूची के लिए डिफ़ॉल्ट मान लौटाता है.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

यदि सूची <code>list</code> में केवल एक आइटम है, तो उस आइटम को लौटाता है.    यदि सूची रिक्त है, तो फ़ंक्शन नल लौटाता है, जब तक कि एक वैकल्पिक <code>default</code> निर्दिष्ट न किया जाए. यदि सूची में एक से अधिक आइटम हैं, तो फ़ंक्शन एक त्रुटि लौटाता है.


## Examples

### Example #1 
सूची \{1} का एकल मान प्राप्त करें.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
सूची \{} का एकल मान प्राप्त करें.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
सूची \{} का एकल मान प्राप्त करें. अगर रिक्त है, तो -1 लौटाएँ.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
