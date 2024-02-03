---
title: Number.Power
---

# Number.Power


## Description

Bir sayıyı verilen üsse yükseltir.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

<code>number</code> öğesini <code>power</code> üssüne yükseltme işleminin sonucunu döndürür.    <code>number</code> veya <code>power</code> null ise <code>Number.Power</code> null döndürür.      <ul>        <li><code>number</code>: Taban.</li>        <li><code>power</code>: Üs.</li>      </ul>


## Examples

### Example #1 
5&#39;in 3 üssüne yükseltilmiş değerini bulur (5&#39;in küpü).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
