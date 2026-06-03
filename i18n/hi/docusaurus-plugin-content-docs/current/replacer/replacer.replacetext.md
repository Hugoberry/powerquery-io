---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


पाठ को प्रदान किए गए इनपुट के साथ प्रतिस्थापित करता है.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

मूल `text` के `old` पाठ को `new` पाठ के साथ प्रतिस्थापित करता है. इस प्रतिस्थापक का उपयोग `List.ReplaceValue` और `Table.ReplaceValue` में किया जा सकता है.


## Examples

### Example #1
स्ट्रिंग "hEllo world" में पाठ "hE" को "He" के साथ प्रतिस्थापित करें.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
