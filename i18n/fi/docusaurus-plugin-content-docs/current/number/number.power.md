---
title: Number.Power
---

# Number.Power


Korottaa luvun annettuun potenssiin.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Palauttaa tuloksen, kun `number` korotetaan potenssiin `power`. Jos `number` tai `power` on tyhjäarvo, `Number.Power` palauttaa tyhjäarvon.

-   `number`: kantaluku.
-   `power`: eksponentti.


## Examples

### Example #1
Selvitä arvo, joka saadaan, kun 5 korotetaan kolmanteen potenssiin (5 kuutioituna).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
