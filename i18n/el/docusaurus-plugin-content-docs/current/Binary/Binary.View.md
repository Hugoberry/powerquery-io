---
title: Binary.View
---

# Binary.View


## Description

Δημιουργεί ή επεκτείνει ένα δυαδικό με δείκτες χειρισμού που ορίζονται από το χρήστη για λειτουργίες ερωτημάτων και ενεργειών.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Επιστρέφει μια προβολή του <code>binary</code> όπου χρησιμοποιούνται οι συναρτήσεις που καθορίζονται στο <code>handlers</code> αντί της προεπιλεγμένης συμπεριφοράς μιας λειτουργίας όταν η λειτουργία εφαρμόζεται στην προβολή.<br />Εάν παρέχεται το <code>binary</code>, όλες οι συναρτήσεις χειριστή είναι προαιρετικές. Εάν δεν παρέχεται το <code>binary</code>, απαιτείται η λειτουργία χειριστή <code>GetStream</code>. Εάν μια συνάρτηση χειριστή δεν έχει καθοριστεί για μια λειτουργία, η προεπιλεγμένη συμπεριφορά της λειτουργίας εφαρμόζεται στο <code>binary</code> (εκτός από την περίπτωση του <code>GetExpression</code>).<br />Οι συναρτήσεις χειριστή πρέπει να επιστρέψουν ένα τιμή που είναι σημασιολογικά ισοδύναμη με το αποτέλεσμα της εφαρμογής της συνάρτησης έναντι <code>binary</code> (ή της προκύπτουσας προβολής στην περίπτωση του <code>GetExpression</code>).<br />Εάν μια συνάρτηση χειριστή εμφανίσει σφάλμα, η προεπιλεγμένη συμπεριφορά της λειτουργίας εφαρμόζεται στην προβολή.<br /><code>Binary.View</code> μπορεί να χρησιμοποιηθεί για την υλοποίηση αναδίπλωσης σε μια πηγή δεδομένων – τη μετάφραση των ερωτημάτων M σε λειτουργίες συγκεκριμένης πηγής (για παράδειγμα, για λήψη μιας ενότητας ενός αρχείου).<br />Ανατρέξτε στη δημοσιευμένη τεκμηρίωση προσαρμοσμένης σύνδεσης Power Query για μια πιο ολοκληρωμένη περιγραφή του <code>Binary.View</code>.<br />


## Examples

### Example #1 
Δημιουργήστε μια βασική προβολή που δεν απαιτεί πρόσβαση στα δεδομένα προκειμένου να προσδιοριστεί το μήκος.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary