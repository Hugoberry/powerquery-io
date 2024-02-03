---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου σε κάθε καθορισμένη θέση.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου σε κάθε καθορισμένη θέση.


## Examples

### Example #1 
Διαχωρίστε την είσοδο στις καθορισμένες θέσεις, ξεκινώντας από την αρχή της εισόδου.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Διαχωρίστε την είσοδο στις καθορισμένες θέσεις, ξεκινώντας από το τέλος της εισόδου.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
