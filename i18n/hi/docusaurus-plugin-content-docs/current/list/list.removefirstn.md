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

एक सूची लौटाता है जो सूची `list` का पहला तत्व हटा देती है. यदि `list` कोई खाली सूची है तो एक खाली सूची लौटा दी जाती है. यह फ़ंक्शन, नीचे सूचीबद्ध कई मानों को हटाने के लिए एक वैकल्पिक पैरामीटर, `countOrCondition`, की मदद लेता है.

-   यदि कोई संख्या निर्दिष्ट है, तो उतनी संख्या तक आइटम हटा दिए जाते हैं.
-   यदि कोई शर्त निर्दिष्ट की गई है, तो `list` की शुरुआत में कोई भी लगातार मेल खाने वाली वस्तु हटा दी जाती है.
-   यदि यह पैरामीटर शून्य है, तो डिफ़ॉल्ट व्यवहार देखा जाता है.


## Examples

### Example #1
पहली 3 संख्याओं के बिना \{1, 2, 3, 4, 5\} से एक सूची बनाएँ.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
\{5, 4, 2, 6, 1\} से एक सूची बनाएँ, जो 3 से छोटी संख्या से प्रारंभ होती है.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
