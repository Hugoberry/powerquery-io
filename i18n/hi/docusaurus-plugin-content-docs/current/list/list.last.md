---
title: List.Last
---

# List.Last


सूची का अंतिम मान या रिक्त होने पर निर्दिष्ट डिफ़ॉल्ट लौटाता है.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

निर्दिष्ट सूची का अंतिम आइटम लौटाता है, या अगर सूची खाली है तो वैकल्पिक डिफ़ॉल्ट मान लौटाता है.

-   `list`: जाँची जाने वाली सूची.
-   `defaultValue`: (वैकल्पिक) अगर सूची रिक्त है, तो डिफ़ॉल्ट मान लौटाना है. अगर सूची रिक्त है और कोई डिफ़ॉल्ट मान निर्दिष्ट नहीं है, तो फ़ंक्शन `null` लौटाता है.


## Examples

### Example #1
सूची \{1, 2, 3\} का अंतिम मान प्राप्त करें.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
सूची \{\} का अंतिम मान या रिक्त होने पर -1 प्राप्त करें.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
