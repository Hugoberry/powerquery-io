---
title: List.MatchesAll
---

# List.MatchesAll


अगर शर्त फ़ंक्शन सूची के सभी मानों से संतुष्ट है तो true लौटाता है.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

अगर शर्त फ़ंक्शन, <code>condition</code>, सूची <code>list</code> के सभी मानों से संतुष्ट है तो <code>true</code> अन्यथा <code>false</code> लौटाता है.


## Examples

### Example #1 
निर्धारित करें कि क्या सूची \{11, 12, 13} के मान 10 से बड़े हैं.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
निर्धारित करें कि क्या सूची \{1, 2, 3} के मान 10 से बड़े हैं.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
