---
title: Table.SplitAt
---

# Table.SplitAt


ऐसी सूची लौटाता है जिसमें निर्दिष्ट पहली गणना पंक्तियाँ और शेष पंक्तियाँ शामिल हैं.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

दो तालिकाओं वाली सूची लौटाता है: <code>table</code> की पहली N पंक्तियों वाली एक तालिका (जैसा कि <code>count</code> द्वारा निर्दिष्ट) और <code>table</code> की शेष पंक्तियों वाली तालिका.यदि परिणामी सूची की तलिकाओं की बिल्कुल एक बार प्रगणना की जाती हैं, तो फ़ंक्शन केवल एक बार <code>table</code> की गणना करेगा.


## Examples

### Example #1 
तालिका की पहली दो पंक्तियों और तालिका की शेष पंक्तियों को वापस करें.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
