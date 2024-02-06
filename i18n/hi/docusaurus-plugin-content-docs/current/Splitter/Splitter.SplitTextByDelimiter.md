---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


ऐसा फ़ंक्शन लौटाता है जो निर्दिष्ट डीलिमीटर के अनुसार पाठ को पाठ की सूची में विभाजित करता है.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

ऐसा फ़ंक्शन लौटाता है जो निर्दिष्ट डीलिमीटर के अनुसार पाठ को पाठ की सूची में विभाजित करता है.


## Examples

### Example #1 
उद्धृत अल्पविरामों पर ध्यान न देते हुए, इनपुट को अल्पविराम द्वारा विभाजित करें.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
