---
title: Duration.TotalHours
---

# Duration.TotalHours


इस अवधि विस्तार के कुल घंटे लौटाता है.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

<code>duration</code> द्वारा विस्तारित कुल घंटे लौटाता है.


## Examples

### Example #1 
अवधि मान द्वारा विस्तारित कुल घंटे ढूँढें.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
