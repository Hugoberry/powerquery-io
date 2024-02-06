---
title: Duration.Days
---

# Duration.Days


अवधि का दिनों वाला भाग लौटाता है.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

<code>duration</code> का दिनों वाला भाग लौटाता है.


## Examples

### Example #1 
दो दिनांकों के बीच के दिनों की संख्या निकालें.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
