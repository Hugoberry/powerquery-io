---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

ऐसा फ़ंक्शन लौटाता है जो प्रत्येक निर्दिष्ट स्थिति पर पाठ को पाठ की सूची में विभाजित करता है.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

ऐसा फ़ंक्शन लौटाता है जो प्रत्येक निर्दिष्ट स्थिति पर पाठ को पाठ की सूची में विभाजित करता है.


## Examples

### Example #1 
इनपुट की शुरुआत से प्रारंभ करते हुए, इनपुट को निर्दिष्ट स्थितियों पर विभाजित करें.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
इनपुट के अंत से प्रारंभ करते हुए, इनपुट को निर्दिष्ट स्थितियों पर विभाजित करें.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
