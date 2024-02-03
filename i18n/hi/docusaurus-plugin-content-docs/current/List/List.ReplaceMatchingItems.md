---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

\{ old, new } के प्रत्येक प्रतिस्थापन को लागू करता है.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

सूची <code>list</code> में दिए गए प्रतिस्थापन करता है. एक प्रतिस्थापन कार्रवाई <code>replacements</code> में एक सूची में प्रदान किए गए दो मानों, पुराना मान और नया मान, की सूची होती है.    गुणवत्ता परीक्षण नियंत्रित करने के लिए एक वैकल्पिक समीकरण मापदंड मान, <code>equationCriteria</code>, निर्दिष्ट किया जा सकता है.


## Examples

### Example #1 
मान 5 को -5 के साथ और मान 1 को -1 के साथ प्रतिस्थापित करके \{1, 2, 3, 4, 5} से एक सूची बनाएँ.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
