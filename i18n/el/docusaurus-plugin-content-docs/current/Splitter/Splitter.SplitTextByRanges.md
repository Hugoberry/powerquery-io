---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου σύμφωνα με τις καθορισμένες αποκλίσεις και μήκη.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου σύμφωνα με τις καθορισμένες αποκλίσεις και μήκη. Το μήκος null υποδεικνύει ότι θα πρέπει να συμπεριληφθούν όλα τα δεδομένα εισόδου που απομένουν.


## Examples

### Example #1 
Διαχωρίστε την είσοδο με τα καθορισμένα ζεύγη θέσης και μήκους, ξεκινώντας από την αρχή της εισαγωγής. Σημειώστε ότι τα εύρη σε αυτό το παράδειγμα αλληλεπικαλύπτονται.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Διαχωρίστε την είσοδο κατά τα καθορισμένα ζεύγη θέσης και μήκους, ξεκινώντας από το τέλος της εισόδου.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Διαιρέστε τα δεδομένα εισόδου σε ταχυδρομικό κώδικα σταθερού μήκους, ακολουθούμενο από ένα όνομα πόλης μεταβλητού μήκους.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
