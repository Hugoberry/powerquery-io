---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Επιστρέφει το τμήμα του `text` μετά το καθορισμένο `delimiter`. Ένα προαιρετικό αριθμητικό `index` υποδεικνύει ποια εμφάνιση του `delimiter` θα πρέπει να ληφθεί υπόψη. Μια προαιρετική λίστα `index` υποδεικνύει ποια εμφάνιση του `delimiter` θα πρέπει να ληφθεί υπόψη, καθώς και αν η δημιουργία ευρετηρίου θα πρέπει να γίνει από την αρχή ή το τέλος των δεδομένων εισαγωγής.


## Examples

### Example #1
Να γίνει λήψη του τμήματος του "111-222-333" μετά το (πρώτο) ενωτικό.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Να γίνει λήψη του τμήματος του "111-222-333" μετά το δεύτερο ενωτικό.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Να γίνει λήψη του τμήματος του "111-222-333" μετά το δεύτερο ενωτικό από το τέλος.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
