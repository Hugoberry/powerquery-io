---
title: Number.Power
---

# Number.Power


## Description

Korottaa luvun annettuun potenssiin.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Palauttaa tuloksen, kun <code>number</code> korotetaan potenssiin <code>power</code>.    Jos <code>number</code> tai <code>power</code> on tyhjäarvo, <code>Number.Power</code> palauttaa tyhjäarvon.      <ul>        <li><code>number</code>: kantaluku.</li>        <li><code>power</code>: eksponentti.</li>      </ul>


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
