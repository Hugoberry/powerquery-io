---
title: Duration.Seconds
---

# Duration.Seconds


Egy időtartam másodpercrészét adja vissza.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

A(z) `duration` másodpercrészét adja vissza.


## Examples

### Example #1
A másodpercek számának kinyerése egy időtartamértékből.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
