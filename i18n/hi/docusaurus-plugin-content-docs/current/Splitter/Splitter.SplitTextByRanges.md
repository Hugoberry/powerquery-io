---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

ऐसा फ़ंक्शन लौटाता है जो निर्दिष्ट ऑफ़सेट और लंबाइयों के अनुसार पाठ को पाठ की सूची में विभाजित करता है.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

ऐसा फ़ंक्शन देता है जो टेक्स्ट को खास ऑफ़सेट और लंबाई के अनुसार टेक्स्ट की सूची में बाँटता है. नल लंबाई बताती है कि सभी बचे हुए इनपुट शामिल किए जाने चाहिए.


## Examples

### Example #1 
इनपुट के की शुरुआत से प्रारंभ करते हुए, निर्दिष्ट स्थिति और लंबाई के युग्मों के अनुसार इनपुट को विभाजित करें. ध्यान दें कि इस उदाहरण की श्रेणियाँ अधिव्यापन करती हैं.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
इनपुट के अंत से प्रारंभ करते हुए, निर्दिष्ट स्थिति और लंबाई के युग्मों के अनुसार इनपुट को विभाजित करें.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
इनपुट को किसी निश्चित-लंबाई वाले पोस्टल कोड के बाद चर-लंबाई वाले शहर के नाम में बाँटें.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
