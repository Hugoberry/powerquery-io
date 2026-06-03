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

ऐसी सूची लौटाता है जो सूची `list` की समाप्ति से अंतिम `countOrCondition` तत्वों को हटा देती है. यदि `list` में `countOrCondition` से कम तत्व हैं, तो एक खाली सूची लौटा दी जाती है.

-   यदि कोई संख्या निर्दिष्ट है, तो उतनी संख्या तक आइटम हटा दिए जाते हैं.
-   यदि कोई शर्त निर्दिष्ट की गई है, तो `list` के अंत में कोई भी लगातार मेल खाने वाली वस्तु हटा दी जाती है.
-   यदि यह पैरामीटर शून्य है, तो केवल एक आइटम हटाया जाता है.


## Examples

### Example #1
अंतिम 3 संख्याओं के बिना \{1, 2, 3, 4, 5\} से एक सूची बनाएँ.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
\{5, 4, 2, 6, 4\} से एक सूची बनाएँ जो 3 से छोटी संख्या पर समाप्त होती है.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
