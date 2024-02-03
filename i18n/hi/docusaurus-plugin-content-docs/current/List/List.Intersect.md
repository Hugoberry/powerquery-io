---
title: List.Intersect
---

# List.Intersect


## Description

इनपुट में पाए गए सूची मानों का प्रतिच्छेदन लौटाता है.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

इनपुट सूची <code>lists</code> में पाए गए सूची मानों का प्रतिच्छेदन लौटाता है. एक वैकल्पिक पैरामीटर, <code>equationCriteria</code>, निर्दिष्ट किया जा सकता है.


## Examples

### Example #1 
सूचियों \{1..5}, \{2..6}, \{3..7} का प्रतिच्छेदन प्राप्त करें.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
