---
title: Number.Power
---

# Number.Power


## Description

Menggunakan bilangan dengan pangkat tertentu.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Mengembalikan hasil dari menggunakan <code>number</code> dengan pangkat <code>power</code>.    Jika <code>number</code> atau <code>power</code> adalah null, <code>Number.Power</code> akan menghasilkan null.      <ul>        <li><code>number</code>: Bilangan pokok.</li>        <li><code>power</code>: Eksponen.</li>      </ul>


## Examples

### Example #1 
Mencari nilai bilangan 5 yang digunakan dengan pangkat 3 (5 pangkat 3).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
