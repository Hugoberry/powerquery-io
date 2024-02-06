---
title: List.RemoveFirstN
---

# List.RemoveFirstN


ऐसी सूची लौटाता है जो सूची की शुरुआत में तत्वों की निर्दिष्ट संख्या को छोड़ देती है.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

एक ऐसी सूची लौटाता है, जो सूची <code>list</code> का प्रथम तत्व निकाल देती है. यदि <code>list</code> कोई रिक्त सूची है, तो एक रिक्त सूची लौटाई जाती है.यह फ़ंक्शन नीचे सूचीबद्ध किए गए एकाधिक मान निकालने का समर्थन करने के लिए एक वैकल्पिक पैरामीटर <code>countOrCondition</code> लेता है. <ul> <li>यदि कोई संख्या निर्दिष्ट है, तो उस संख्या तक कई आइटम निकाल दिए जाते हैं. </li> <li>यदि कोई शर्त निर्दिष्ट है, तो लौटाई गई सूची <code>list</code> के उस प्रथम तत्व के साथ शुरू होती है, जो मानदंड को पूरा करती है. एक बार आइटम द्वारा शर्त को पूरा न करने पर आगे किसी भी आइटम पर विचार नहीं किया जाता है. </li> <li>यदि यह पैरामीटर नल है, तो डिफ़ॉल्ट व्यवहार देखा जाता है. </li> </ul>


## Examples

### Example #1 
पहली 3 संख्याओं के बिना \{1, 2, 3, 4, 5} से एक सूची बनाएँ.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
\{5, 4, 2, 6, 1} से एक सूची बनाएँ, जो 3 से छोटी संख्या से प्रारंभ होती है.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
