---
title: List.ContainsAny
---

# List.ContainsAny


इंगित करता है कि क्या किसी सूची में किसी दूसरी सूची का कोई भी मान शामिल है.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

यह इंगित करता है कि क्या सूची में किसी अन्य सूची के कोई भी मान शामिल हैं. यदि सूची में ये मान पाए जाते हैं, तो `TRUE` लौटाता है, अन्यथा `FALSE` लौटाता है.

-   `list`: खोजने वाली सूची.
-   `values`: पहली सूची में खोजे जाने वाले मानों की सूची.
-   `equationCriteria`: (वैकल्पिक) वह तुलनाकर्ता जिसका उपयोग यह निर्धारित करने के लिए किया जाता है कि क्या दो मान समान हैं.


## Examples

### Example #1
यह निर्धारित करें कि सूची \{1, 2, 3, 4, 5\} में 3 शामिल है, या 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
यह निर्धारित करें कि सूची \{1, 2, 3, 4, 5\} में 6 शामिल है, या 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
निर्धारित करें कि केस पर ध्यान न देते हुए, सूची में एक घोड़ा या एक उल्लू शामिल है.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
यह निर्धारित करें कि क्या सूची में या तो 8 अप्रैल, 2022, या 12 जनवरी, 2021 की दिनांक शामिल है.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
