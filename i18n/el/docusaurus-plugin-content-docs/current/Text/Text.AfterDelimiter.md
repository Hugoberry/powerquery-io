---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Επιστρέφει το τμήμα του <code>text</code> μετά το καθορισμένο <code>delimiter</code>.    Ένα προαιρετικό αριθμητικό <code>index</code> υποδεικνύει ποια εμφάνιση του <code>delimiter</code> θα πρέπει να ληφθεί υπόψη.    Μια προαιρετική λίστα <code>index</code> υποδεικνύει ποια εμφάνιση του <code>delimiter</code> θα πρέπει να ληφθεί υπόψη, καθώς και αν η δημιουργία ευρετηρίου θα πρέπει να γίνει από την αρχή ή το τέλος των δεδομένων εισαγωγής.


## Examples

### Example #1 
Να γίνει λήψη του τμήματος του &#34;111-222-333&#34; μετά το (πρώτο) ενωτικό.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Να γίνει λήψη του τμήματος του &#34;111-222-333&#34; μετά το δεύτερο ενωτικό.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Να γίνει λήψη του τμήματος του &#34;111-222-333&#34; μετά το δεύτερο ενωτικό από το τέλος.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
