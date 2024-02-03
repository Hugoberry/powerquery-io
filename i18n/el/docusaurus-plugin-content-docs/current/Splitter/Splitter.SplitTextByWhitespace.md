---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου στο κενό διάστημα.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου στο κενό διάστημα.


## Examples

### Example #1 
Διαχωρίστε την εισαγωγή κατά χαρακτήρες κενού διαστήματος, αντιμετωπίζοντας τα εισαγωγικά όπως οποιονδήποτε άλλο χαρακτήρα.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
