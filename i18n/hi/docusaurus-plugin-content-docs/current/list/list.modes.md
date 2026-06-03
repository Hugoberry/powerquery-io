---
title: List.Modes
---

# List.Modes


सूची में सर्वाधिक आवृत्ति वाले मानों की सूची लौटाता है.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

वे आइटम लौटाता है जो `list`%1!s! में सबसे अधिक बार दिखाई देते हैं. अगर सूची रिक्त है, तो एक त्रुटि आएगी. अगर समान अधिकतम आवृत्ति के कई आइटम दिखाई देते हैं, तो उन सभी को लौटा दिया जाता है. समानता परीक्षण नियंत्रित करने के लिए तुलना का एक वैकल्पिक मानदंड मान, `equationCriteria`, निर्दिष्ट किया जा सकता है.


## Examples

### Example #1
सूची `{"A", 1, 2, 3, 3, 4, 5, 5}` में सर्वाधिक बार-बार आने वाले आइटम प्राप्त करें.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
