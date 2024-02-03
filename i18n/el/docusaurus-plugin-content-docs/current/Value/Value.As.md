---
title: Value.As
---

# Value.As


## Description

Επιστρέφει την τιμή αν είναι συμβατή με τον καθορισμένο τύπο.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Επιστρέφει την τιμή αν είναι συμβατή με τον καθορισμένο τύπο. Αυτό ισοδυναμεί με τον τελεστή "as" στο M, με την εξαίρεση ότι μπορεί να δεχτεί αναφορές τύπου αναγνωριστικού, όπως Number.Type.


## Examples

### Example #1 
Μεταδώστε έναν αριθμό σε έναν αριθμό.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Προσπαθήστε να μεταδώσετε μια τιμή κειμένου σε έναν αριθμό.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
