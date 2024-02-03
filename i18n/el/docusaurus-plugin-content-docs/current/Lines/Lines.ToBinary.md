---
title: Lines.ToBinary
---

# Lines.ToBinary


## Description

Μετατρέπει μια λίστα κειμένου σε μια δυαδική τιμή χρησιμοποιώντας την καθορισμένη κωδικοποίηση και lineSeparator. Η καθορισμένη lineSeparator προσαρτάται στο τέλος κάθε γραμμής.  Εάν δεν καθορίζεται, χρησιμοποιούνται οι χαρακτήρες επαναφοράς και αλλαγής γραμμής.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Details

Μετατρέπει μια λίστα κειμένου σε μια δυαδική τιμή χρησιμοποιώντας την καθορισμένη κωδικοποίηση και lineSeparator. Η καθορισμένη lineSeparator προσαρτάται στο τέλος κάθε γραμμής.  Εάν δεν καθορίζεται, χρησιμοποιούνται οι χαρακτήρες επαναφοράς και αλλαγής γραμμής.



## Category
Lines
