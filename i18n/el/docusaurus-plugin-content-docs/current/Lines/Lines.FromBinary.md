---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Μετατρέπει μια δυαδική τιμή σε μια λίστα τιμών κειμένου διαιρεμένων με αλλαγές γραμμής.  Αν καθοριστεί στυλ εισαγωγικών, οι αλλαγές γραμμής ενδέχεται να εμφανίζονται μέσα σε εισαγωγικά.  Αν η includeLineSeparators είναι true, οι χαρακτήρες αλλαγής γραμμής συμπεριλαμβάνονται στο κείμενο.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

Μετατρέπει μια δυαδική τιμή σε μια λίστα τιμών κειμένου διαιρεμένων με αλλαγές γραμμής.  Αν καθοριστεί στυλ εισαγωγικών, οι αλλαγές γραμμής ενδέχεται να εμφανίζονται μέσα σε εισαγωγικά.  Αν η includeLineSeparators είναι true, οι χαρακτήρες αλλαγής γραμμής συμπεριλαμβάνονται στο κείμενο.



## Category
Lines
