---
title: List.PositionOf
---

# List.PositionOf


सूची के मान का(के) ऑफ़सेट लौटाता है.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

वह ऑफ़सेट लौटाता है जिस पर सूची में निर्दिष्ट मान दिखाई देता है. अगर मान दिखाई नहीं देता है, तो -1 लौटाता है.

-   `list`: खोजने के लिए सूची.
-   `value`: सूची में ढूँढा जाने वाला मान.
-   `occurrence`: (वैकल्पिक) रिपोर्ट करने के लिए विशिष्ट घटना. यह मान `Occurrence.First`, `Occurrence.Last`, या `Occurrence.All` हो सकता है. अगर कोई `occurrence` निर्दिष्ट नहीं किया गया है, तो `Occurrence.First` का उपयोग किया जाता है.
-   `equationCriteria`: (वैकल्पिक) निर्दिष्ट करता है कि मानों की तुलना करते समय समानता कैसे निर्धारित होती है. यह पैरामीटर एक कुंजी चयनकर्ता फ़ंक्शन, एक तुलनाकर्ता फ़ंक्शन, या एक ऐसी सूची हो सकता है जिसमें की चयनकर्ता और तुलनाकर्ता, दोनों शामिल हों.


## Examples

### Example #1
सूची \{1, 2, 3\} की वह स्थिति प्राप्त करें, जिस पर मान 3 दिखाई देते हैं.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
सूचि में 2022 की जितनी भी तारीखें हैं, उनकी स्थिति पता करें.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
'dog' शब्द के अंतिम बार आने की स्थिति सूची में ज्ञात करें, केस (case) को नज़रअंदाज़ करते हुए.
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
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
सूची में वह स्थिति ढूँढें जो संख्या 28 की दो इकाइयों के भीतर है.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
