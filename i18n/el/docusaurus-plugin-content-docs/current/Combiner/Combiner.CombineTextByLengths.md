---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Επιστρέφει μια συνάρτηση που συνδυάζει μια λίστα κειμένου χρησιμοποιώντας τα καθορισμένα μήκη.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Επιστρέφει μια συνάρτηση που συνδυάζει μια λίστα τιμών κειμένου σε μία τιμή κειμένου χρησιμοποιώντας τα καθορισμένα μήκη.


## Examples

### Example #1 
Συνδυάζει μια λίστα τιμών κειμένου εξάγοντας τους καθορισμένους αριθμούς χαρακτήρων από κάθε τιμή εισόδου.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Συνδυάζει μια λίστα τιμών κειμένου εξάγοντας τους καθορισμένους αριθμούς χαρακτήρων, αφού πρώτα προ συμπληρώσει το αποτέλεσμα με το κείμενο του προτύπου.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
