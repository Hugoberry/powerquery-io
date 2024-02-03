---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Επιστρέφει μια συνάρτηση που συνδυάζει μια λίστα κειμένου χρησιμοποιώντας τις καθορισμένες θέσεις και μήκη.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Επιστρέφει μια συνάρτηση που συνδυάζει μια λίστα τιμών κειμένου σε μία τιμή κειμένου χρησιμοποιώντας τις καθορισμένες θέσεις και μήκη εξόδου. Το μήκος null υποδεικνύει ότι θα πρέπει να συμπεριληφθεί ολόκληρη η τιμή κειμένου.


## Examples

### Example #1 
Συνδυάζει μια λίστα τιμών κειμένου χρησιμοποιώντας τις καθορισμένες θέσεις και μήκη εξόδου.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
