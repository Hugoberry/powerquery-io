---
title: Number.Power
---

# Number.Power


Upphöjer ett tal till angivet tal.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Returnerar resultatet från att `number` upphöjs till `power`. Om `number` eller `power` är null returnerar `Number.Power` null.

-   `number`: Basen.
-   `power`: Exponenten.


## Examples

### Example #1
Hitta värdet 5 upphöjt till 3 (5 i kubik).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
