---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


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


## Remarks

Επιστρέφει το τμήμα του `text` ανάμεσα στα καθορισμένα `startDelimiter` και `endDelimiter`. Ένα προαιρετικό αριθμητικό `startIndex` υποδεικνύει ποια εμφάνιση του `startDelimiter` θα πρέπει να ληφθεί υπόψη. Μια προαιρετική λίστα `startIndex` υποδεικνύει ποια εμφάνιση του `startDelimiter` θα πρέπει να ληφθεί υπόψη, καθώς και αν η δημιουργία ευρετηρίου θα πρέπει να γίνει από την αρχή ή το τέλος των δεδομένων εισαγωγής. Το `endIndex` είναι παρόμοιο, με εξαίρεση το γεγονός ότι η δημιουργία ευρετηρίου γίνεται σε σχέση με το `startIndex`.


## Examples

### Example #1
Να γίνει λήψη του τμήματος του "111 (222) 333 (444)" ανάμεσα στην (πρώτη) ανοιχτή παρένθεση και την (πρώτη) κλειστή παρένθεση που την ακολουθεί.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Να γίνει λήψη του τμήματος του "111 (222) 333 (444)" ανάμεσα στη δεύτερη ανοιχτή παρένθεση και την πρώτη κλειστή παρένθεση που την ακολουθεί.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Να γίνει λήψη του τμήματος του "111 (222) 333 (444)" ανάμεσα στη δεύτερη ανοιχτή παρένθεση από το τέλος και τη δεύτερη κλειστή παρένθεση που την ακολουθεί.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
