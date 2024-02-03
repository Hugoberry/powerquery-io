---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

ऐसा फ़ंक्शन लौटाता है जो बार-बार निर्दिष्ट लंबाई के बाद पाठ को पाठ की सूची में विभाजित करता है.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

ऐसा फ़ंक्शन लौटाता है जो बार-बार निर्दिष्ट लंबाई के बाद पाठ को पाठ की सूची में विभाजित करता है.


## Examples

### Example #1 
इनपुट की शुरुआत से प्रारंभ करके, इनपुट को तीन वर्णों के टुकड़ों में बार-बार विभाजित करें.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
इनपुट के अंत से प्रारंभ करते हुए, इनपुट को तीन वर्णों के टुकड़ों में बार-बार विभाजित करें.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
