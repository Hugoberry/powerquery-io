---
title: List.Max
---

# List.Max


## Description

सूची का अधिकतम मान या रिक्त सूची के लिए डिफ़ॉल्ट मान लौटाता है.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

सूची <code>list</code> के अधिकतम आइटम या सूची रिक्त होने पर वैकल्पिक डिफ़ॉल्ट मान <code>default</code> लौटाता है.    यह निर्धारित करने के लिए एक वैकल्पिक comparisonCriteria मान <code>comparisonCriteria</code> निर्दिष्ट किया जा सकता है कि सूची के आइटम्स की तुलना कैसे करनी है. यदि यह पैरामीटर नल है, तो डिफ़ॉल्ट तुलनाकर्ता का उपयोग किया जाता है.


## Examples

### Example #1 
सूची \{1, 4, 7, 3, -2, 5} में अधिकतम प्राप्त करें.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
सूची \{} में अधिकतम प्राप्त करें या रिक्त होने पर -1 लौटाएँ. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
