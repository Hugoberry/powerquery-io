---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Details

Επιστρέφει το τμήμα του <code>text</code> ανάμεσα στα καθορισμένα <code>startDelimiter</code> και <code>endDelimiter</code>.    Ένα προαιρετικό αριθμητικό <code>startIndex</code> υποδεικνύει ποια εμφάνιση του <code>startDelimiter</code> θα πρέπει να ληφθεί υπόψη.    Μια προαιρετική λίστα <code>startIndex</code> υποδεικνύει ποια εμφάνιση του <code>startDelimiter</code> θα πρέπει να ληφθεί υπόψη, καθώς και αν η δημιουργία ευρετηρίου θα πρέπει να γίνει από την αρχή ή το τέλος των δεδομένων εισαγωγής.    Το <code>endIndex</code> είναι παρόμοιο, με εξαίρεση το γεγονός ότι η δημιουργία ευρετηρίου γίνεται σε σχέση με το <code>startIndex</code>.


## Examples

### Example #1 
Να γίνει λήψη του τμήματος του &#34;111 (222) 333 (444)&#34; ανάμεσα στην (πρώτη) ανοιχτή παρένθεση και την (πρώτη) κλειστή παρένθεση που την ακολουθεί.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Να γίνει λήψη του τμήματος του &#34;111 (222) 333 (444)&#34; ανάμεσα στη δεύτερη ανοιχτή παρένθεση και την πρώτη κλειστή παρένθεση που την ακολουθεί.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Να γίνει λήψη του τμήματος του &#34;111 (222) 333 (444)&#34; ανάμεσα στη δεύτερη ανοιχτή παρένθεση από το τέλος και τη δεύτερη κλειστή παρένθεση που την ακολουθεί.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
