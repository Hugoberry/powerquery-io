---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Επιστρέφει μια δυαδική μορφή που διαβάζει μια ομάδα στοιχείων.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Details

Οι παράμετροι είναι οι εξής:<ul><li>Η παράμετρος <code>binaryFormat</code> καθορίζει τη δυαδική μορφή της τιμής κλειδιού.</li><li>Η παράμετρος <code>group</code> παρέχει πληροφορίες σχετικά με την ομάδα των γνωστών στοιχείων.</li><li>Η προαιρετική παράμετρος <code>extra</code> μπορεί να χρησιμοποιηθεί για τον καθορισμό μιας συνάρτησης που θα επιστρέψει μια τιμή δυαδικής μορφής για την τιμή που ακολουθεί οποιοδήποτε μη αναμενόμενο κλειδί.  Αν η παράμετρος <code>extra</code> δεν καθοριστεί, τότε παρουσιάζεται σφάλμα αν υπάρχουν μη αναμενόμενες τιμές κλειδιού.</li></ul>Η παράμετρος <code>group</code> καθορίζει μια λίστα ορισμών στοιχείων.  Κάθε ορισμός στοιχείου είναι μια λίστα, η οποία περιέχει 3-5 τιμές, ως εξής:<ul><li>Τιμή κλειδιού.  Η τιμή του κλειδιού που αντιστοιχεί στο στοιχείο.  Πρέπει να είναι μοναδική στο σύνολο των στοιχείων.</li><li>Μορφή στοιχείου.  Η δυαδική μορφή που αντιστοιχεί στην τιμή του στοιχείου.  Δίνει τη δυνατότητα σε κάθε στοιχείο να έχει διαφορετική μορφή. </li><li>Εμφάνιση στοιχείου.  Η τιμή <code>BinaryOccurrence.Type</code>, δηλαδή πόσες φορές αναμένεται να εμφανιστεί το στοιχείο στην ομάδα.   Τα απαιτούμενα στοιχεία που δεν είναι παρόντα προκαλούν σφάλμα.  Τα απαιτούμενα ή προαιρετικά διπλότυπα στοιχεία θεωρούνται μη αναμενόμενες τιμές κλειδιού.</li><li>Προεπιλεγμένη τιμή στοιχείου (προαιρετικά).  Αν η προεπιλεγμένη τιμή στοιχείου εμφανίζεται στη λίστα ορισμού στοιχείου και δεν είναι null, τότε θα χρησιμοποιηθεί αυτή αντί για την προεπιλεγμένη.  Η προεπιλογή για επαναλαμβανόμενα ή προαιρετικά στοιχεία είναι null και η προεπιλογή για επαναλαμβανόμενες τιμές είναι μια κενή λίστα \{ }.</li><li>Μετασχηματισμός τιμής στοιχείου (προαιρετικά).   Αν η συνάρτηση μετασχηματισμού τιμής στοιχείου εμφανίζεται στη λίστα ορισμού στοιχείου και δεν είναι null, τότε θα κληθεί για να μετασχηματίσει την τιμή στοιχείου, προτού επιστραφεί.  Η συνάρτηση μετασχηματισμού καλείται, μόνο αν το στοιχείο εμφανίζεται στην είσοδο (δεν θα κληθεί ποτέ με την προεπιλεγμένη τιμή). </li></ul>


## Examples

### Example #1 
Τα παρακάτω υποθέτουν τιμή κλειδιού ενός byte, με 4 αναμενόμενα στοιχεία στην ομάδα, τα οποία έχουν όλα ένα byte δεδομένων μετά από το κλειδί.  Τα στοιχεία εμφανίζονται στην είσοδο ως εξής:&lt;ul&gt;&lt;li&gt;Το Κλειδί 1 απαιτείται και εμφανίζεται με την τιμή 11.&lt;/li&gt;&lt;li&gt;Το Κλειδί 2 επαναλαμβάνεται, εμφανίζεται δύο φορές με την τιμή 22 και έχει ως αποτέλεσμα την τιμή \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Το Κλειδί 3 είναι προαιρετικό, δεν εμφανίζεται και έχει ως αποτέλεσμα την τιμή null.&lt;/li&gt;&lt;li&gt;Το Κλειδί 4 επαναλαμβάνεται, δεν εμφανίζεται και έχει ως αποτέλεσμα την τιμή \{ }.&lt;/li&gt;&lt;li&gt;Το Κλειδί 5 δεν αποτελεί μέρος της ομάδας, αλλά εμφανίζεται μία φορά με την τιμή 55.  Η επιπλέον συνάρτηση καλείται με την τιμή κλειδιού 5 και επιστρέφει τη μορφή που αντιστοιχεί σε αυτή την τιμή (BinaryFormat.Byte).  Η τιμή 55 διαβάζεται και απορρίπτεται.&lt;/li&gt;&lt;/ul&gt;
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2 
Το παρακάτω παράδειγμα παρουσιάζει τον μετασχηματισμό τιμής στοιχείου και την προεπιλεγμένη τιμή στοιχείου.   Το επαναλαμβανόμενο στοιχείο με το κλειδί 1 αθροίζει τη λίστα των τιμών που διαβάστηκαν με χρήση της List.Sum.  Το προαιρετικό στοιχείο με το κλειδί 2 έχει την προεπιλεγμένη τιμή 123 αντί για τη null.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items