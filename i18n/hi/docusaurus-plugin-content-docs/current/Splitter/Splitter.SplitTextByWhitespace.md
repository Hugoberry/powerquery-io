---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


ऐसा फ़ंक्शन लौटाता है जो सफेद रिक्ति पर पाठ को पाठ की सूची में विभाजित करता है.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

ऐसा फ़ंक्शन लौटाता है जो सफेद रिक्ति पर पाठ को पाठ की सूची में विभाजित करता है.


## Examples

### Example #1 
उद्धरणों को किसी अन्य वर्ण की तरह मानते हुए, इनपुट को श्वेत रिक्ति वर्णों से विभाजित करें.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
