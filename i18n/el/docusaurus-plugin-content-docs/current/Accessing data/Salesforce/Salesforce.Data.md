---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Επιστρέφει τα αντικείμενα από το λογαριασμό Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Επιστρέφει τα αντικείμενα στο λογαριασμό Salesforce που παρασχέθηκε στα διαπιστευτήρια. Ο λογαριασμός θα συνδεθεί μέσω του παρεχόμενου περιβάλλοντος <code>loginUrl</code>. Εάν δεν παρέχεται κάποιο περιβάλλον, τότε ο λογαριασμός θα συνδεθεί στην παραγωγή (https://login.salesforce.com). Μπορεί να παρασχεθεί μια προαιρετική παράμετρος εγγραφής <code>options</code> για τον καθορισμό πρόσθετων ιδιοτήτων. Η εγγραφή μπορεί να περιέχει τα ακόλουθα πεδία:    <ul><li><code>CreateNavigationProperties</code> : Μια λογική τιμή (true/false) που ορίζει αν θα δημιουργούνται ιδιότητες περιήγησης στις τιμές που επιστρέφονται (η προεπιλογή είναι false).</li><li><code>ApiVersion</code> : Η έκδοση του Salesforce API για χρήση για αυτό το ερώτημα. Όταν δεν καθορίζεται, χρησιμοποιείται η έκδοση API 29.0.</li><li><code>Timeout</code> : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα θα γίνει αναμονή πριν από την εγκατάλειψη της αίτησης στον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από την προέλευση.</li></ul>    



## Category
Accessing data
