---
title: List.RemoveNulls
---

# List.RemoveNulls


निर्दिष्ट सूची से सभी &#34;null&#34; मान निकालता है.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

<code>list</code> में "null" मानों की सभी आवृत्तियाँ निकालता है. अगर सूची में कोई 'null' मान नहीं है, तो मूल सूची को लौटाया जाता है.


## Examples

### Example #1 
सूची \{1, 2, 3, null, 4, 5, null, 6} से &#34;null&#34; मान निकालें.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
