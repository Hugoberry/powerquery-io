---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου χρησιμοποιώντας οποιονδήποτε από τους καθορισμένους οριοθέτες.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου χρησιμοποιώντας οποιονδήποτε από τους καθορισμένους οριοθέτες.


## Examples

### Example #1 
Διαχωρίστε την είσοδο με κόμμα ή ερωτηματικό, αγνοώντας εισαγωγικά και εισαγωγικά οριοθέτες και ξεκινώντας από την αρχή της εισαγωγής.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Διαχωρίστε την είσοδο με κόμμα ή ερωτηματικό, αγνοώντας εισαγωγικά και εισαγωγικά οριοθέτες και ξεκινώντας από το τέλος της εισαγωγής.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
