---
title: Number.Mod
---

# Number.Mod


## Description

Ακέραιος που διαιρεί δύο αριθμούς και επιστρέφει το υπόλοιπο.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Επιστρέφει το υπόλοιπο της διαίρεσης του ακέραιου αριθμού <code>number</code> διά του <code>divisor</code>.    Εάν το <code>number</code> ή το <code>divisor</code> είναι null, η <code>Number.Mod</code> επιστρέφει την τιμή null.      <ul>        <li><code>number</code>: Ο διαιρετέος.</li>        <li><code>divisor</code>: Ο διαιρέτης.</li>      </ul>


## Examples

### Example #1 
Βρείτε το υπόλοιπο της διαίρεσης 5 διά 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
