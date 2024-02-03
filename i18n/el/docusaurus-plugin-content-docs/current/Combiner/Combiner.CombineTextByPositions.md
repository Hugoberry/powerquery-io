---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Επιστρέφει μια συνάρτηση που συνδυάζει μια λίστα κειμένου χρησιμοποιώντας τις καθορισμένες θέσεις εξόδου.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Επιστρέφει μια συνάρτηση που συνδυάζει μια λίστα τιμών κειμένου σε μία τιμή κειμένου χρησιμοποιώντας τις καθορισμένες θέσεις εξόδου.


## Examples

### Example #1 
Συνδυάζει μια λίστα τιμών κειμένου τοποθετώντας τες στην έξοδο στις καθορισμένες θέσεις.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
