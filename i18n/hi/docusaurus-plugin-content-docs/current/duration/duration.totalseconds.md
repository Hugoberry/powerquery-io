---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


इस अवधि विस्तार के कुल सेकंड लौटाता है.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

<code>duration</code> द्वारा विस्तारित कुल सेकंड लौटाता है.


## Examples

### Example #1 
अवधि मान द्वारा विस्तारित कुल सेकंड ढूँढें.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
