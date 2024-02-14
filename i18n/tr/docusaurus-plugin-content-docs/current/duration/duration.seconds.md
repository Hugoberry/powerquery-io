---
title: Duration.Seconds
---

# Duration.Seconds


Sürenin saniye kısmını döndürür.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

<code>duration</code> için saniye kısmını döndürür.


## Examples

### Example #1 
Süre değerinden saniyeleri ayıklayın.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
