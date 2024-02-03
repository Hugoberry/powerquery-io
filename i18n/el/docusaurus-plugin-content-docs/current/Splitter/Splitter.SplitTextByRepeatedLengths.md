---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου επαναλαμβανόμενα μετά το καθορισμένο μήκος.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου επαναλαμβανόμενα μετά το καθορισμένο μήκος.


## Examples

### Example #1 
Διαχωρίστε επανειλημμένα την είσοδο σε κομμάτια τριών χαρακτήρων, ξεκινώντας από την αρχή της εισαγωγής.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Διαχωρίστε επανειλημμένα την είσοδο σε κομμάτια τριών χαρακτήρων, ξεκινώντας από το τέλος της εισαγωγής.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
