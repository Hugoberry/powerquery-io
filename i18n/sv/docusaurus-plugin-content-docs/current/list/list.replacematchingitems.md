---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Tillämpar varje ersättning av \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Utför angivna ersättningar för listan <code>list</code>. En ersättningsåtgärd, <code>replacements</code>, består av en lista med två värden, det gamla värdet och det nya värdet, som anges i en lista.    Ett valfritt ekvationsvillkorsvärde, <code>equationCriteria</code>, kan anges för att hantera likhetstestning.


## Examples

### Example #1 
Skapa en lista från \{1, 2, 3, 4, 5} genom att ersätta värdet 5 med -5 och värdet 1 med -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
