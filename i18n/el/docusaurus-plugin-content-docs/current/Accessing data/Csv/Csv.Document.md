---
title: Csv.Document
---

# Csv.Document


## Description

Επιστρέφει τα περιεχόμενα του εγγράφου CSV ως πίνακα.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Επιστρέφει τα περιεχόμενα του εγγράφου CSV ως πίνακα.    <ul>      <li>        <code>columns</code> μπορεί να είναι null, ο αριθμός των στηλών, μια λίστα ονομάτων στηλών, ένας τύπος πίνακα ή μια εγγραφή επιλογών.      </li>      <li>        <code>delimiter</code> μπορεί να είναι ένας μεμονωμένος χαρακτήρας, μια λίστα χαρακτήρων ή η τιμή <code>""</code>, η οποία υποδεικνύει ότι οι γραμμές πρέπει να χωρίζονται κατά διαδοχικούς χαρακτήρες κενού διαστήματος. Προκαθορισμένο: <code>","</code>.      </li>      <li>        Ανατρέξτε στο <code>ExtraValues.Type</code> για τις υποστηριζόμενες τιμές του <code>extraValues</code>.      </li>      <li>        <code>encoding</code> καθορίζει τον τύπο κωδικοποίησης κειμένου.      </li>    </ul>    Εάν έχει καθοριστεί μια εγγραφή για <code>columns</code> (και <code>delimiter</code>, <code>extraValues</code>, και <code>encoding</code> είναι null), ενδέχεται να παρέχονται τα ακόλουθα πεδία εγγραφής:    <ul>      <li>        <code>Οριοθέτης</code>: Ο οριοθέτης στήλης. Προκαθορισμένο: <code>","</code>.      </li>      <li>        <code>Στήλες</code>: Μπορεί να είναι null, ο αριθμός των στηλών, μια λίστα ονομάτων στηλών ή ένας τύπος πίνακα. Εάν ο αριθμός των στηλών είναι μικρότερος από τον αριθμό που βρίσκεται στην είσοδο, οι πρόσθετες στήλες θα αγνοηθούν. Εάν ο αριθμός των στηλών είναι μεγαλύτερος από τον αριθμό που βρέθηκε στην είσοδο, οι πρόσθετες στήλες θα είναι μηδενικές. Όταν δεν καθορίζεται, ο αριθμός των στηλών θα καθοριστεί από αυτό που βρίσκεται στην είσοδο.      </li>      <li>        <code>Κωδικοποίηση</code>: Η κωδικοποίηση κειμένου του αρχείου. Προκαθορισμένο: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Καθορίζει τον τρόπο χειρισμού των εισαγωγικών.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (default): Οι προσφορές σε ένα πεδίο είναι σημαντικές μόνο αμέσως μετά τον οριοθέτη.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: Οι προσφορές σε ένα πεδίο είναι πάντα σημαντικές, ανεξάρτητα από το πού εμφανίζονται.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Καθορίζει τον τρόπο χειρισμού των ανακοινωμένων αλλαγών γραμμής.        <ul>          <li>            <code>QuoteStyle.Csv</code> (default): Οι αλλαγές γραμμής που αναφέρονται σε εισαγωγικά αντιμετωπίζονται ως μέρος των δεδομένων και όχι ως το τέλος της τρέχουσας γραμμής.          </li>          <li>            <code>QuoteStyle.None</code>: Όλες οι αλλαγές γραμμής αντιμετωπίζονται ως το τέλος της τρέχουσας γραμμής, ακόμη και όταν εμφανίζονται μέσα σε μια τιμή σε εισαγωγικά.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Επεξεργασία κειμένου CSV με κεφαλίδες στηλών
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```




## Category
Accessing data
