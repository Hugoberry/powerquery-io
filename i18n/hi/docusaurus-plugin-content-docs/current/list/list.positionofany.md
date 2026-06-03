---
title: List.PositionOfAny
---

# List.PositionOfAny


सूची के मान का पहला ऑफ़सेट लौटाता है.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

उस ऑफ़सेट को लौटाता है, जिस पर मानों की निर्दिष्ट सूची से कोई आइटम किसी सूची में दिखाई देता है. अगर कोई आवृत्ति नहीं मिलती है, तो -1 लौटाता है.

-   `list`: खोजने के लिए सूची.
-   `values`: मूल सूची में खोजे जाने वाले मानों की सूची.
-   `occurrence`: (वैकल्पिक) रिपोर्ट करने के लिए विशिष्ट घटना. यह मान `Occurrence.First`, `Occurrence.Last`, या `Occurrence.All` हो सकता है. अगर कोई `occurrence` निर्दिष्ट नहीं किया गया है, तो `Occurrence.First` का उपयोग किया जाता है.
-   `equationCriteria`: (वैकल्पिक) निर्दिष्ट करता है कि मानों की तुलना करते समय समानता कैसे निर्धारित होती है. यह पैरामीटर एक कुंजी चयनकर्ता फ़ंक्शन, एक तुलनाकर्ता फ़ंक्शन, या एक ऐसी सूची हो सकता है जिसमें की चयनकर्ता और तुलनाकर्ता, दोनों शामिल हों.


## Examples

### Example #1
सूची \{1, 2, 3\} की वह पहली स्थिति प्राप्त करें, जिस पर मान 2 या 3 दिखाई देते हैं.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
2022 या 2023 की तिथियों वाले सभी उदाहरणों की सूची में उनका स्थान पता करें.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
सूचि में 'dog' या 'cat' शब्दों में से आखिरी बार आने की स्थिति पता करें, बड़े या छोटे अक्षरों की परवाह किए बिना.
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
सूची में ऐसी कोई भी स्थिति ढूँढें जो संख्या 17 या 28 की दो इकाइयों के भीतर हो.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
