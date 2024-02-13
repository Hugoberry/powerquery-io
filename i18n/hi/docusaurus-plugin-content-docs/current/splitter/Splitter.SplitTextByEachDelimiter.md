---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


ऐसा फ़ंक्शन लौटाता है जो अनुक्रम में प्रत्येक निर्दिष्ट डीलिमीटर पर पाठ को पाठ की सूची में विभाजित करता है.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

ऐसा फ़ंक्शन लौटाता है जो अनुक्रम में प्रत्येक निर्दिष्ट डीलिमीटर पर पाठ को पाठ की सूची में विभाजित करता है.


## Examples

### Example #1 
इनपुट की शुरुआत से प्रारंभ करते हुए, इनपुट को अल्पविराम, फिर अर्धविराम द्वारा, विभाजित करें.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
उद्धरणों को किसी अन्य वर्ण की तरह मानते हुए और इनपुट के अंत से प्रारंभ करते हुए, इनपुट को अल्पविराम, फिर अर्धविराम द्वारा विभाजित करें.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
