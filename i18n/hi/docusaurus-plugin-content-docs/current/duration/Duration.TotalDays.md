---
title: Duration.TotalDays
---

# Duration.TotalDays


इस अवधि विस्तार के कुल दिन लौटाता है.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

<code>duration</code> द्वारा विस्तारित कुल दिन लौटाता है.


## Examples

### Example #1 
अवधि मान द्वारा विस्तारित कुल दिन ढूँढें.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
