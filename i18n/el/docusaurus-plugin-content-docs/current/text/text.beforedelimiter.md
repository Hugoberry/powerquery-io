---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Επιστρέφει το τμήμα του `text` πριν από το καθορισμένο `delimiter`. Ένα προαιρετικό αριθμητικό `index` υποδεικνύει ποια εμφάνιση του `delimiter` θα πρέπει να ληφθεί υπόψη. Μια προαιρετική λίστα `index` υποδεικνύει ποια εμφάνιση του `delimiter` θα πρέπει να ληφθεί υπόψη, καθώς και αν η δημιουργία ευρετηρίου θα πρέπει να γίνει από την αρχή ή το τέλος των δεδομένων εισαγωγής.


## Examples

### Example #1
Να γίνει λήψη του τμήματος του "111-222-333" πριν από το (πρώτο) ενωτικό.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Να γίνει λήψη του τμήματος του "111-222-333" πριν από το δεύτερο ενωτικό.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Να γίνει λήψη του τμήματος του "111-222-333" πριν από το δεύτερο ενωτικό από το τέλος.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
