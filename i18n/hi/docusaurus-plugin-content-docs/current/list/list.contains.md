---
title: List.Contains
---

# List.Contains


इंगित करता है कि क्या सूची में मान है.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

इंगित करता है कि क्या सूची में निर्दिष्ट मान शामिल है. यदि सूची में यह मान पाया जाता है, तो `TRUE` लौटाता है, अन्यथा `FALSE` लौटाता है.

-   `list`: खोजने वाली सूची.
-   `value`: सूची में खोजने वाला मान.
-   `equationCriteria`: (वैकल्पिक) वह तुलनाकर्ता जिसका उपयोग यह निर्धारित करने के लिए किया जाता है कि क्या दो मान समान हैं.


## Examples

### Example #1
यह निर्धारित करें कि क्या सूची \{1, 2, 3, 4, 5\} में 3 शामिल है.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
यह निर्धारित करें कि क्या सूची \{1, 2, 3, 4, 5\} में 6 शामिल है.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
केस पर ध्यान न देते हुए, यह निर्धारित करें कि क्या सूची में "rhubarb" शामिल है.
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
निर्धारित करें कि क्या सूची में 8 अप्रैल, 2022 की दिनांक शामिल है.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
