---
title: Number.Power
---

# Number.Power


## Description

Skaitlis tiek kāpināts norādītajā pakāpē.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Atgriež rezultātu, kas tiek iegūts, skaitli <code>number</code> kāpinot šādā pakāpē: <code>power</code>.    Ja <code>number</code> vai <code>power</code> vērtība ir Null, funkcija <code>Number.Power</code> atgriež vērtību Null.      <ul>        <li><code>number</code>: bāze.</li>        <li><code>power</code>: kāpinātājs.</li>      </ul>


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
