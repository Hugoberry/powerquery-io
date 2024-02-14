---
title: List.Sum
---

# List.Sum


सूची के आइटमों का योग लौटाता है.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

सूची, <code>list</code> के गैर-नल मानों का योग लौटाता है.  सूची में गैर-नल मान न होने पर नल लौटाता है.


## Examples

### Example #1 
सूची &lt;code&gt;\{1, 2, 3}&lt;/code&gt; की संख्याओं का योग प्राप्त करें.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
