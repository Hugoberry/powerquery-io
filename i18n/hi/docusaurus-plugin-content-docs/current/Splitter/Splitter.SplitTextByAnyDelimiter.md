---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


ऐसा फ़ंक्शन लौटाता है जो किसी भी निर्दिष्ट डीलिमीटर पर पाठ को पाठ की सूची में विभाजित करता है.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

ऐसा फ़ंक्शन लौटाता है जो किसी भी निर्दिष्ट डीलिमीटर पर पाठ को पाठ की सूची में विभाजित करता है.


## Examples

### Example #1 
उद्धरणों और उद्धरित डिलिमिटर्स पर ध्यान न देते हुए और इनपुट की शुरुआत से प्रारंभ करते हुए, इनपुट को अल्पविराम या अर्धविराम से विभाजित करें.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
उद्धरणों और उद्धरित डिलिमिटर्स पर ध्यान न देते हुए और इनपुट के अंत से प्रारंभ करते हुए, इनपुट को अल्पविराम या अर्धविराम से विभाजित करें.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
