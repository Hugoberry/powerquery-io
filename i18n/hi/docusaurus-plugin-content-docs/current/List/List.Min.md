---
title: List.Min
---

# List.Min


सूची का न्यूनतम मान या रिक्त सूची के लिए डिफ़ॉल्ट मान लौटाता है.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

सूची <code>list</code> के न्यूनतम आइटम या सूची रिक्त होने पर वैकल्पिक डिफ़ॉल्ट मान <code>default</code> लौटाता है.    यह निर्धारित करने के लिए एक वैकल्पिक comparisonCriteria मान <code>comparisonCriteria</code> निर्दिष्ट किया जा सकता है कि सूची के मानों की तुलना कैसे करनी है. यदि यह पैरामीटर नल है, तो डिफ़ॉल्ट तुलनाकर्ता का उपयोग किया जाता है.


## Examples

### Example #1 
सूची \{1, 4, 7, 3, -2, 5} में न्यूनतम प्राप्त करें.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
सूची \{} में न्यूनतम प्राप्त करें या रिक्त होने पर -1 लौटाएँ. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
