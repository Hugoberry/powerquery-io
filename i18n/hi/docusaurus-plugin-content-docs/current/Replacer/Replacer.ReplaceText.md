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

मूल <code>text</code> के <code>old</code> पाठ को <code>new</code> पाठ के साथ प्रतिस्थापित करता है. इस प्रतिस्थापक का उपयोग <code>List.ReplaceValue</code> और <code>Table.ReplaceValue</code> में किया जा सकता है.


## Examples

### Example #1 
स्ट्रिंग &#34;hEllo world&#34; में पाठ &#34;hE&#34; को &#34;He&#34; के साथ प्रतिस्थापित करें.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
