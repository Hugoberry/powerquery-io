---
title: Number.Power
---

# Number.Power


## Description

Υψώνει έναν αριθμό στη δύναμη που δίνεται.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Επιστρέφει το αποτέλεσμα της ύψωσης του <code>number</code> στη δύναμη του <code>power</code>.    Εάν το <code>number</code> ή το <code>power</code> είναι null, η <code>Number.Power</code> επιστρέφει την τιμή null.      <ul>        <li><code>number</code>: Η βάση.</li>        <li><code>power</code>: Ο εκθέτης.</li>      </ul>


## Examples

### Example #1 
Βρείτε την τιμή του 5 υψωμένο στη δύναμη του 3 (5 στον κύβο).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
