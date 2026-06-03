---
title: List.ContainsAll
---

# List.ContainsAll


इंगित करता है कि क्या किसी सूची में किसी दूसरी सूची के सभी मान शामिल हैं.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

यह इंगित करता है कि क्या सूची में किसी अन्य सूची के सभी मान शामिल हैं. यदि सूची में सभी मान पाए जाते हैं, तो `TRUE` लौटाता है, अन्यथा `FALSE` लौटाता है.

-   `list`: खोजने वाली सूची.
-   `values`: पहली सूची में खोजे जाने वाले मानों की सूची.
-   `equationCriteria`: (वैकल्पिक) वह तुलनाकर्ता जिसका उपयोग यह निर्धारित करने के लिए किया जाता है कि क्या दो मान समान हैं.


## Examples

### Example #1
यह निर्धारित करें कि क्या सूची \{1, 2, 3, 4, 5\} में 3 और 4 शामिल हैं.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
यह निर्धारित करें कि क्या सूची \{1, 2, 3, 4, 5\} में 5 और 6 शामिल हैं.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
निर्धारित करें कि केस पर ध्यान न देते हुए, क्या सूची में एक कुत्ता और एक घोड़ा शामिल हैं.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
निर्धारित करें कि क्या सूची में 8 अप्रैल, 2022 और 6 जुलाई, 2021 की दिनांकें शामिल हैं.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
