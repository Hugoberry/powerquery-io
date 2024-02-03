---
title: Number.Exp
---

# Number.Exp


## Description

Υψώνει το e στη δύναμη που δίνεται.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Details

Επιστρέφει το αποτέλεσμα της ύψωσης του e στη δύναμη του <code>number</code> (εκθετική συνάρτηση).      <ul>        <li><code>number</code>: Μια συνάρτηση <code>number</code> για την οποία θα υπολογιστεί η εκθετική συνάρτηση. Αν η <code>number</code> είναι null, η <code>Number.Exp</code> επιστρέφει την τιμή null. </li>      </ul>


## Examples

### Example #1 
Υψώστε το e στη δύναμη του 3.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
