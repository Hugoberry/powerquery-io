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

अगर शर्त फ़ंक्शन सूची में सभी मानों से संतुष्ट है, तो `true` लौटाता है, अन्यथा `false` लौटाता है.

-   `list`: जाँच करने के लिए मानों वाली सूची.
-   `condition`: सूची में मानों को जाँच करने की शर्त.


## Examples

### Example #1
निर्धारित करें कि क्या सूची \{11, 12, 13\} के मान 10 से बड़े हैं.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
निर्धारित करें कि क्या सूची \{1, 2, 3\} के मान 10 से बड़े हैं.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
केस को अनदेखा करते हुए निर्धारित करें कि क्या सूची में सभी टेक्स्ट मानों में "anna" शामिल है.
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
निर्धारित करें कि क्या सभी तारीखों में वर्ष 2021 शामिल है.
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
