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

सूची <code>list</code> में सर्वाधिक बार दिखने वाला आइटम लौटाता है. यदि सूची रिक्त है, तो कोई अपवाद लौटाया जाता है. यदि समान अधिकतम आवृत्ति वाले एकाधिक आइटम दिखाई देते हैं, तो अंतिम वाले आइटम को चुना जाता है.    समानता परीक्षण नियंत्रित करने के लिए एक वैकल्पिक <code>comparisonCriteria</code> मान <code>equationCriteria</code> निर्दिष्ट किया जा सकता है. 


## Examples

### Example #1 
सूची &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt; में सर्वाधिक बार-बार आने वाला आइटम प्राप्त करें.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
सूची &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; में सर्वाधिक बार-बार आने वाला आइटम प्राप्त करें.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
