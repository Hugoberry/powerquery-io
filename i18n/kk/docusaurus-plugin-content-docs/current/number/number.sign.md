---
title: Number.Sign
---

# Number.Sign


Сан оң болса, 1 санын, теріс болса -1 санын және нөлге тең болса, 0 санын қайтарады.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

`number` оң сан болса, 1 санын, теріс болса -1 санын және нөлге тең болса, 0 санын қайтарады. Егер `number` мәні null болса, `Number.Sign` null мәнін қайтарады.


## Examples

### Example #1
182 санының таңбасын анықтау.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2
\-182 санының таңбасын анықтау.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3
0 санының таңбасын анықтау.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
