---
title: List.Mode
---

# List.Mode


सूची में सर्वाधिक आवृत्ति वाला मान लौटाता है.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

वह आइटम लौटाता है जो `list` में सबसे अधिक बार दिखाई देता है. अगर सूची रिक्त है, तो एक त्रुटि आएगी. अगर समान अधिकतम आवृत्ति के कई आइटम दिखाई देते हैं, तो अंतिम आइटम को चुना जाता है. समानता परीक्षण नियंत्रित करने के लिए तुलना का एक वैकल्पिक मानदंड मान, `equationCriteria`, निर्दिष्ट किया जा सकता है.


## Examples

### Example #1
सूची `{"A", 1, 2, 3, 3, 4, 5}` में सर्वाधिक बार-बार आने वाला आइटम प्राप्त करें.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
सूची `{"A", 1, 2, 3, 3, 4, 5, 5}` में सर्वाधिक बार-बार आने वाला आइटम प्राप्त करें.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
