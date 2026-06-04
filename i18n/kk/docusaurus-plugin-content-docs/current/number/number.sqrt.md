---
title: Number.Sqrt
---

# Number.Sqrt


Санның квадрат түбірін қайтарады.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

`number` санының квадрат түбірін қайтарады. Егер `number` мәні null болса, `Number.Sqrt` null мәнін қайтарады. Егер ол теріс мән болса, `Number.NaN` қайтарылады (сан емес).


## Examples

### Example #1
625 санының квадрат түбірін анықтау.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
85 санының квадрат түбірін анықтау.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
