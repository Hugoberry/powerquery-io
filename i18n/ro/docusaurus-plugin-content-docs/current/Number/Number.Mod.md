---
title: Number.Mod
---

# Number.Mod


## Description

Numărul întreg împarte două numere şi returnează restul.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Returnează restul care rezultă din împărțirea întreagă a <code>number</code> la <code>divisor</code>.    Dacă <code>number</code> sau <code>divisor</code> este nul, <code>Number.Mod</code> returnează nul.      <ul>        <li><code>number</code>: deîmpărțitul.</li>        <li><code>divisor</code>: împărțitorul.</li>      </ul>


## Examples

### Example #1 
Găsiţi restul când împărţiţi 5 la 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
