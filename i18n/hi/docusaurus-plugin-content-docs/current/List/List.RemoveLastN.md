---
title: List.RemoveLastN
---

# List.RemoveLastN


ऐसी सूची लौटाता है जो सूची की समाप्ति तत्वों की निर्दिष्ट संख्या को निकाल देती है.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

ऐसी सूची लौटाता है जो अंतिम <code>countOrCondition</code> तत्वों को, सूची <code>list</code> की समाप्ति से लौटाती है. अगर <code>list</code> के पास <code>countOrCondition</code> से कम तत्व हैं, तो एक रिक्त सूची लौटाई जाती है. <ul> <li>अगर कोई संख्या निर्दिष्ट है, तो उस तक कई आइटम निकाल दिए जाते हैं. </li> <li>अगर कोई शर्त निर्दिष्ट है, तो मापदंड को पूरा करने वाली <code>list</code> में नीचे से पहले तत्व पर समाप्त होने वाली सूची को लौटाया जाता है. एकबार आइटम द्वारा शर्त को पूरा न करने पर, आगे किसी भी आइटम पर विचार नहीं किया जाता है. </li> <li>अगर यह पैरामीटर नल है, तो केवल एक आइटम निकाला जाता है. </li> </ul>


## Examples

### Example #1 
अंतिम 3 संख्याओं के बिना \{1, 2, 3, 4, 5} से एक सूची बनाएँ.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
\{5, 4, 2, 6, 4} से एक सूची बनाएँ जो 3 से छोटी संख्या पर समाप्त होती है.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
