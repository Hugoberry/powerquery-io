---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου χρησιμοποιώντας κάθε καθορισμένο οριοθέτη με τη σειρά.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου χρησιμοποιώντας κάθε καθορισμένο οριοθέτη με τη σειρά.


## Examples

### Example #1 
Διαχωρίστε την είσοδο με κόμμα και μετά ερωτηματικό, ξεκινώντας από την αρχή της εισαγωγής.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Διαχωρίστε την είσοδο με κόμμα και, στη συνέχεια, ερωτηματικό, αντιμετωπίζοντας τα εισαγωγικά όπως κάθε άλλο χαρακτήρα και ξεκινώντας από το τέλος της εισαγωγής.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
