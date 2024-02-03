---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Επιστρέφει τις αναφορές από το λογαριασμό Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Επιστρέφει τις αναφορές στο λογαριασμό Salesforce που παρασχέθηκε στα διαπιστευτήρια. Ο λογαριασμός θα συνδεθεί μέσω του παρεχόμενου περιβάλλοντος <code>loginUrl</code>. Εάν δεν παρέχεται κάποιο περιβάλλον, τότε ο λογαριασμός θα συνδεθεί στην παραγωγή (https://login.salesforce.com). Μπορεί να παρασχεθεί μια προαιρετική παράμετρος εγγραφής <code>options</code> για τον καθορισμό πρόσθετων ιδιοτήτων. Η εγγραφή μπορεί να περιέχει τα ακόλουθα πεδία:    <ul><li><code>ApiVersion</code> : Η έκδοση του Salesforce API για χρήση για αυτό το ερώτημα. Όταν δεν καθορίζεται, χρησιμοποιείται η έκδοση API 29.0.</li><li><code>Timeout</code> : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα θα γίνει αναμονή πριν από την εγκατάλειψη της αίτησης στον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από την προέλευση.</li></ul>    



## Category
Accessing data
