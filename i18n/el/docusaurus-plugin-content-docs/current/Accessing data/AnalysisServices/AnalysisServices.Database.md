---
title: AnalysisServices.Database
---

# AnalysisServices.Database


## Description

Επιστρέφει έναν πίνακα πολυδιάστατων κύβων ή μοντέλων σε μορφή πίνακα από τη βάση δεδομένων των υπηρεσιών ανάλυσης.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα πολυδιάστατων κύβων ή μοντέλων σε μορφή πίνακα από τη βάση δεδομένων των Υπηρεσιών ανάλυσης <code>database</code> στο διακομιστή <code>server</code>. Μια προαιρετική παράμετρος εγγραφής, <code>options</code>, μπορεί να καθοριστεί για τον έλεγχο των παρακάτω επιλογών:    <ul><li><code>Query</code> : Ένα εγγενές ερώτημα MDX που χρησιμοποιείται για την ανάκτηση δεδομένων.</li><li><code>TypedMeasureColumns</code> : Μια λογική τιμή που υποδεικνύει αν οι τύποι που καθορίζονται στο πολυδιάστατο μοντέλο ή το μοντέλο σε μορφή πίνακα θα χρησιμοποιηθούν για τους τύπους των προστιθέμενων στηλών μετρήσεων. Όταν οριστεί σε false, θα χρησιμοποιείται ο τύπος &quot;number&quot; για όλες τις στήλες μετρήσεων. Η προεπιλεγμένη τιμή για αυτήν την επιλογή είναι false.</li><li><code>Culture</code> : Ένα όνομα κουλτούρας που καθορίζει την κουλτούρα για τα δεδομένα. Αυτό αντιστοιχεί στην ιδιότητα συμβολοσειράς σύνδεσης &quot;Αναγνωριστικό τοπικών ρυθμίσεων&quot;.</li><li><code>CommandTimeout</code> : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα επιτρέπεται η εκτέλεση του ερωτήματος από την πλευρά του διακομιστή, προτού αυτό ακυρωθεί. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.</li><li><code>ConnectionTimeout</code> : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα θα γίνει αναμονή πριν από την εγκατάλειψη της προσπάθειας να γίνει σύνδεση με τον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από το πρόγραμμα οδήγησης.</li><li><code>SubQueries</code> : Ένας αριθμός (0, 1 ή 2) που ορίζει την τιμή της ιδιότητας &quot;SubQueries&quot; στη συμβολοσειρά σύνδεσης. Αυτή ελέγχει τη συμπεριφορά των υπολογισμένων μελών σε δευτερεύουσες επιλογές ή δευτερεύοντες κύβους. (Η προεπιλεγμένη τιμή είναι 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data