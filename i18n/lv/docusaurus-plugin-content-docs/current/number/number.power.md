---
title: Number.Power
---

# Number.Power


Skaitlis tiek kāpināts norādītajā pakāpē.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Atgriež rezultātu, kas tiek iegūts, skaitli `number` kāpinot šādā pakāpē: `power`. Ja `number` vai `power` vērtība ir Null, funkcija `Number.Power` atgriež vērtību Null.

-   `number`: bāze.
-   `power`: kāpinātājs.


## Examples

### Example #1
Iegūstiet vērtību, kas rodas, skaitli 5 kāpinot 3. pakāpē (5 kubā).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
