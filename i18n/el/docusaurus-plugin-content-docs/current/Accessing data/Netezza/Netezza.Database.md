---
title: Netezza.Database
---

# Netezza.Database


## Description

Εισαγάγετε δεδομένα από μια βάση δεδομένων IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα με πίνακες, προβολές και αποθηκευμένες συναρτήσεις Netezza από τη βάση δεδομένων διακομιστή Netezza <code>database</code> στον διακομιστή <code>server</code>. Η θύρα μπορεί να καθοριστεί προαιρετικά με τον διακομιστή, διαχωρισμένη με άνω κάτω τελεία. Μπορεί να καθοριστεί μια προαιρετική παράμετρος εγγραφής, <code>options</code>, για τον έλεγχο των ακόλουθων επιλογών:<ul>        <li><code>CreateNavigationProperties</code>: Μια λογική τιμή (true/false) που ορίζει αν θα δημιουργούνται ιδιότητες περιήγησης στις επιστρεφόμενες τιμές (η προεπιλογή είναι true)</li>        <li><code>HierarchicalNavigation</code>: Μια λογική τιμή (true/false) που ορίζει αν οι πίνακες θα προβάλλονται ομαδοποιημένοι κατά τα ονόματα σχήματος (η προεπιλογή είναι false)</li>        <li><code>ConnectionTimeout</code>: Μια διάρκεια που ελέγχει τον χρόνο αναμονής πριν από την εγκατάλειψη μιας προσπάθειας δημιουργίας σύνδεσης με τον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.</li>        <li><code>CommandTimeout</code>: Μια διάρκεια που ελέγχει το χρονικό διάστημα κατά το οποίο επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή πριν από την ακύρωσή του. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.</li><li><code>NormalizeDatabaseName</code>: Μια λογική τιμή (true/false) που ορίζει αν θα κανονικοποιείται το όνομα βάσης δεδομένων σε κεφαλαία ή αν θα ερμηνεύεται κυριολεκτικά (η προεπιλογή είναι true).</li></ul>Η τιμή της παραμέτρου καθορίζεται ως [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Εμφανίστε τους πίνακες σε ένα έργο IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



