---
title: Number.Exp
---

# Number.Exp


## Description

Umocní číslo e na danú mocninu.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Details

Vráti výsledok umocnenia čísla e na mocninu <code>number</code> (exponenciálna funkcia).      <ul>        <li><code>number</code>: Hodnota <code>number</code>, pre ktorú sa má vypočítať exponenciálna funkcia. Ak hodnota <code>number</code> je null, funkcia <code>Number.Exp</code> vráti hodnotu null. </li>      </ul>


## Examples

### Example #1 
Umocnite číslo e na 3. mocninu.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
