---
title: Number.Combinations
---

# Number.Combinations


Returns the number of unique combinations.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Returns the number of unique combinations from a list of items, <code>setSize</code> with specified combination size, <code>combinationSize</code>.<ul>    <li><code>setSize</code>: The number of items in the list.</li>    <li><code>combinationSize</code>: The number of items in each combination.</li></ul>


## Examples

### Example #1 
Find the number of combinations from a total of 5 items when each combination is a group of 3.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
