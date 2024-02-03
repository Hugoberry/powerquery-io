---
title: Value.Is
---

# Value.Is


## Description

Καθορίζει αν μια τιμή είναι συμβατή με τον καθορισμένο τύπο.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Καθορίζει αν μια τιμή είναι συμβατή με τον καθορισμένο τύπο. Αυτό ισοδυναμεί με τον τελεστή "is" στο M, με την εξαίρεση ότι μπορεί να δεχθεί αναφορές τύπου αναγνωριστικού, όπως Number.Type.


## Examples

### Example #1 
Συγκρίνετε δύο τρόπους για να προσδιορίσετε εάν ένας αριθμός είναι συμβατός με τον αριθμό τύπου.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
