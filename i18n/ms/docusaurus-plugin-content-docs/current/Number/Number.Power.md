---
title: Number.Power
---

# Number.Power


## Description

Menguasakan nombor kepada kuasa yang ditentukan.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Mengembalikan hasil daripada menguasakan <code>number</code> kepada kuasa <code>power</code>.     Jika <code>number</code> atau <code>power</code> adalah nol, <code>Number.Power</code> mengembalikan nol.      <ul>        <li><code>number</code>: Asas.</li>        <li><code>power</code>: Eksponen.</li>      </ul>


## Examples

### Example #1 
Cari nilai bagi 5 yang dikuasakan kepada kuasa 3 (5 kuasa tiga).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
