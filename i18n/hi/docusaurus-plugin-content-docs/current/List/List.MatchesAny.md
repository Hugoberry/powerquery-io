---
title: List.MatchesAny
---

# List.MatchesAny


## Description

अगर शर्त फ़ंक्शन किसी भी मान से संतुष्ट है तो true लौटाता है.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

अगर शर्त फ़ंक्शन, <code>condition</code>, सूची <code>list</code> के किसी भी मान से संतुष्ट है तो <code>true</code> अन्यथा <code>false</code> लौटाता है.


## Examples

### Example #1 
ढूँढें कि क्या सूची \{9, 10, 11} का कोई भी मान 10 से बड़ा है.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
ढूँढें कि क्या सूची \{1, 2, 3} का कोई भी मान 10 से बड़ा है.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
