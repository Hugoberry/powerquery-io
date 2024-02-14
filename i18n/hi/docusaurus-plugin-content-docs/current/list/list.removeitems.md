---
title: List.RemoveItems
---

# List.RemoveItems


सूची में मौजूद आइटमों को list1 से निकालता है.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

<code>list2</code> में दिए गए मानों की सभी आवृत्तियों को <code>list1</code> से निकालता है. अगर <code>list2</code> के मान <code>list1</code> में मौजूद नहीं हैं, तो मूल सूची को लौटाया जाता है.


## Examples

### Example #1 
सूची \{2, 4, 6} के आइटमों को सूची \{1, 2, 3, 4, 2, 5, 5} से निकालें.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
