---
title: List.MatchesAny
---

# List.MatchesAny


अगर शर्त फ़ंक्शन किसी भी मान से संतुष्ट है तो true लौटाता है.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

अगर शर्त फ़ंक्शन सूची में से किसी भी मान से संतुष्ट होता है तो `true` लौटाता है, अन्यथा `false` लौटाता है.

-   `list`: जाँच करने के लिए मानों वाली सूची.
-   `condition`: सूची में मानों को जाँच करने की शर्त.


## Examples

### Example #1
निर्धारित करें कि सूची \{9, 10, 11\} में से कोई भी मान 10 से अधिक है या नहीं.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
निर्धारित करें कि सूची \{1, 2, 3\} में से कोई भी मान 10 से अधिक है या नहीं.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
केस को अनदेखा करते हुए निर्धारित करें कि क्या सूची में किसी भी टेक्स्ट मान में "cat" शामिल है.
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
निर्धारित करें कि क्या किसी तारीख में वर्ष 2021 मौजूद है.
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
