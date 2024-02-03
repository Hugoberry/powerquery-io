---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου σύμφωνα με κάθε καθορισμένο μήκος.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου σύμφωνα με κάθε καθορισμένο μήκος.


## Examples

### Example #1 
Διαχωρίστε την είσοδο στους δύο πρώτους χαρακτήρες ακολουθούμενους από τους επόμενους τρεις, ξεκινώντας από την αρχή της εισαγωγής.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Διαχωρίστε την είσοδο στους τρεις πρώτους χαρακτήρες ακολουθούμενους από τους επόμενους δύο, ξεκινώντας από το τέλος της εισαγωγής.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
