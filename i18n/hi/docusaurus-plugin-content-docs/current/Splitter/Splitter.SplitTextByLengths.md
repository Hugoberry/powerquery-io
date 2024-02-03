---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

ऐसा फ़ंक्शन लौटाता है जो प्रत्येक निर्दिष्ट लंबाई पर पाठ को पाठ की सूची में विभाजित करता है.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

ऐसा फ़ंक्शन लौटाता है जो प्रत्येक निर्दिष्ट लंबाई पर पाठ को पाठ की सूची में विभाजित करता है.


## Examples

### Example #1 
इनपुट की शुरुआत से प्रारंभ करते हुए, इनपुट को पहले के दो वर्णों में, और उसके बाद अगले तीन वर्णों में, विभाजित करें.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
इनपुट के अंत से प्रारंभ करते हुए, इनपुट को पहले के तीन वर्णों में, और उसके बाद अगले दो वर्णों में, विभाजित करें.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
