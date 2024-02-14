---
title: List.Union
---

# List.Union


इनपुट में पाए गए सूची मानों का यूनियन लौटाता है.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

सूचियों <code>lists</code> की एक सूची लेता है, व्यक्तिगत सूचियों में आइटम का संयोजन करता है और उन्हें आउटपुट सूची में लौटाता है. परिणामरूप, लौटाई गई सूची में किसी भी इनपुट सूची के सभी आइटम शामिल होते हैं.    यह कार्रवाई पारंपरिक बैग सिमैंटिक्स को बनाए रखती है, इसलिए डुप्लिकेट मान संयोजन के हिस्से के रूप में मेल खा जाते हैं.    समानता परीक्षण नियंत्रित करने के लिए एक वैकल्पिक समीकरण मापदंड मान <code>equationCriteria</code> निर्दिष्ट किया जा सकता है. 


## Examples

### Example #1 
सूची \{1..5}, \{2..6}, \{3..7} का यूनियन बनाएँ.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations