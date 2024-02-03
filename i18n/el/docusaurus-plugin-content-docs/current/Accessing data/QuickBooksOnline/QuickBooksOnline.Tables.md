---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Εισαγάγετε δεδομένα από το QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

      Επιστρέφει έναν πίνακα όπου παρατίθενται οι διαθέσιμοι πίνακες στο QuickBooks Online. Μπορεί να καθοριστεί μια προαιρετική παράμετρος εγγραφής, <code>options</code>, για τον έλεγχο των ακόλουθων επιλογών:      <ul>        <li><code>ConnectionTimeout</code>: Διάρκεια που ελέγχει το χρονικό διάστημα αναμονής πριν από την εγκατάλειψη της προσπάθειας δημιουργίας σύνδεσης στον διακομιστή.</li>        <li><code>CommandTimeout</code>: Διάρκεια που ελέγχει το χρονικό διάστημα για το οποίο επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή προτού ακυρωθεί.</li>          </ul>        Η παράμετρος εγγραφής καθορίζεται με τη μορφή [option1 = value1, option2 = value2...].    


