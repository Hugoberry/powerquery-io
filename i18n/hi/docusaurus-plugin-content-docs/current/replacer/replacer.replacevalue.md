---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


मान को प्रदान किए गए इनपुट के साथ प्रतिस्थापित करता है.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

मूल `value` के `old` मान को `new` मान के साथ प्रतिस्थापित करता है. इस प्रतिस्थापक का उपयोग `List.ReplaceValue` और `Table.ReplaceValue` में किया जा सकता है.


## Examples

### Example #1
मान 11 को मान 10 के साथ प्रतिस्थापित करें.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
