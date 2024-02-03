---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Санның квадрат түбірін қайтарады.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

<code>number</code> санының квадрат түбірін қайтарады.    Егер <code>number</code> мәні null болса, <code>Number.Sqrt</code> null мәнін қайтарады. Егер ол теріс мән болса, <code>Number.NaN</code> қайтарылады (сан емес).


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
