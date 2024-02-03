---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

ऐसा फ़ंक्शन लौटाता है जो डिलिमिटर के अनुक्रम का उपयोग करके टेक्स्ट की सूची को संयोजित करता है.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

ऐसा फ़ंक्शन लौटाता है जो डिलिमिटर के अनुक्रम का उपयोग करके टेक्स्ट मानों की सूची को एकल टेक्स्ट मान में संयोजित करता है.


## Examples

### Example #1 
डिलिमिटर के क्रम का उपयोग करके टेक्स्ट मानों की सूची संयोजित करें.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
