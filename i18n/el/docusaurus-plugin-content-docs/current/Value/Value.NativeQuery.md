---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

Αξιολογεί ένα ερώτημα σε σχέση με ένα στόχο.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Details

Αξιολογεί το <code>query</code> έναντι του <code>target</code> χρησιμοποιώντας τις παραμέτρους που καθορίζονται στο <code>parameters</code> και τις επιλογές που καθορίζονται στο <code>options</code>.<br />Η έξοδος του ερωτήματος ορίζεται από το <code>target</code>.<br /><code>target</code> παρέχει το πλαίσιο για την πράξη που περιγράφεται από <code>query</code>.<br /><code>query</code> περιγράφει το ερώτημα που πρέπει να εκτελεστεί έναντι του <code>target</code>. <code>query</code> εκφράζεται με συγκεκριμένο τρόπο για το <code>target</code> (για παράδειγμα, μια δήλωση T-SQL)<br />Η προαιρετική <code>parameters</code> τιμή μπορεί να περιέχει είτε λίστα είτε εγγραφή ανάλογα με την περίπτωση για να παρέχει τις τιμές παραμέτρων που αναμένονται από το <code>query</code>.<br />Η προαιρετική <code>options</code> εγγραφή μπορεί να περιέχει επιλογές που επηρεάζουν τη συμπεριφορά αξιολόγησης του <code>query</code> έναντι του <code>target</code>. Αυτές οι επιλογές είναι συγκεκριμένες για το<code>target</code>.<br />



## Category
Values
