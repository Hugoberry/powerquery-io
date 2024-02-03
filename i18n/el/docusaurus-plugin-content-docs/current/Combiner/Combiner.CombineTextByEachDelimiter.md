---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Επιστρέφει μια συνάρτηση που συνδυάζει μια λίστα κειμένου χρησιμοποιώντας μια ακολουθία οριοθέτων.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Επιστρέφει μια συνάρτηση που συνδυάζει μια λίστα τιμών κειμένου σε μία τιμή κειμένου χρησιμοποιώντας μια ακολουθία οριοθέτων.


## Examples

### Example #1 
Συνδυάζει μια λίστα τιμών κειμένου χρησιμοποιώντας μια ακολουθία οριοθέτων.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
