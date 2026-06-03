---
title: List.MaxN
---

# List.MaxN


सूची के अधिकतम मान लौटाता है. लौटाए जाने वाले मानों की संख्या या फ़िल्टर शर्त निर्दिष्ट की जानी चाहिए.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

निर्दिष्ट सूची के अधिकतम मान लौटाता है. पंक्तियों को सॉर्ट करने के बाद, परिणामों को और अधिक फ़िल्टर करने के लिए वैकल्पिक पैरामीटर निर्दिष्ट किए जा सकते हैं.

-   `list`: मानों की सूची.
-   `countOrCondition`: लौटाए जाने वाले मानों की संख्या या फ़िल्टर शर्त निर्दिष्ट करता है. अगर कोई संख्या निर्दिष्ट की जाती है, तो अवरोही क्रम में अधिकतम `countOrCondition` आइटम्स की सूची लौटाई जाती है. अगर कोई शर्त निर्दिष्ट की जाती है, तो लौटाई गई सूची में वे सभी आइटम्स शामिल होते हैं जो उस शर्त को पूरा करते हैं.
-   `comparisonCriteria`: (वैकल्पिक) एक फ़ंक्शन जिसका उपयोग मानों की तुलना करने से पहले उन्हें रूपांतरित करने के लिए किया जाता है. अगर यह पैरामीटर `null` है, तो मानों की तुलना बिना किसी परिवर्तन के की जाती है.
-   `includeNulls`: (वैकल्पिक) यह दर्शाता है कि सूची में मौजूद `null` मानों को अधिकतम आइटम निर्धारित करते समय शामिल किया जाना चाहिए या नहीं. डिफ़ॉल्ट मान `true` है.


## Examples

### Example #1
निर्दिष्ट सूची के शीर्ष 5 मान प्राप्त करें.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
3 से अधिक अक्षरों वाले शब्द खोजें.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
जर्मन दिनांकों की सूची से तीन सबसे हाल ही के दिनांक ढूँढें.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
