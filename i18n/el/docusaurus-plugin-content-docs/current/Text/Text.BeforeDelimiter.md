---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Επιστρέφει το τμήμα του <code>text</code> πριν από το καθορισμένο <code>delimiter</code>.    Ένα προαιρετικό αριθμητικό <code>index</code> υποδεικνύει ποια εμφάνιση του <code>delimiter</code> θα πρέπει να ληφθεί υπόψη.    Μια προαιρετική λίστα <code>index</code> υποδεικνύει ποια εμφάνιση του <code>delimiter</code> θα πρέπει να ληφθεί υπόψη, καθώς και αν η δημιουργία ευρετηρίου θα πρέπει να γίνει από την αρχή ή το τέλος των δεδομένων εισαγωγής.


## Examples

### Example #1 
Να γίνει λήψη του τμήματος του &#34;111-222-333&#34; πριν από το (πρώτο) ενωτικό.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Να γίνει λήψη του τμήματος του &#34;111-222-333&#34; πριν από το δεύτερο ενωτικό.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Να γίνει λήψη του τμήματος του &#34;111-222-333&#34; πριν από το δεύτερο ενωτικό από το τέλος.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
