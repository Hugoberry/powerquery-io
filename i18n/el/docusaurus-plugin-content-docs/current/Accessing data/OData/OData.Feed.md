---
title: OData.Feed
---

# OData.Feed


## Description

Επιστρέφει έναν πίνακα των τροφοδοσιών δεδομένων OData που παρέχονται από μια υπηρεσία OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Επιστρέφει έναν πίνακα ροών OData που προσφέρονται από μια υπηρεσία OData από ένα uri <code>serviceUri</code>, κεφαλίδες <code>headers</code>. Μια δυαδική τιμή που καθορίζει εάν θα χρησιμοποιηθούν ταυτόχρονες συνδέσεις ή μια προαιρετική παράμετρος εγγραφής, <code>options</code>, μπορεί να καθοριστεί για τον έλεγχο των ακόλουθων επιλογών:    <ul>    <li><code>Query</code>: Προσθέστε μέσω προγραμματισμού παραμέτρους ερωτήματος στη διεύθυνση URL χωρίς να χρειάζεται να ανησυχείτε για τη φυγή </li>    <li> <code>Headers</code> : Ο καθορισμός αυτής της τιμής ως εγγραφή θα παρέχει πρόσθετες κεφαλίδες σε ένα αίτημα HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: Καθορισμός αυτής της τιμής. καθώς μια λίστα θα αποκλείσει αυτά τα κλειδιά κεφαλίδας HTTP από το να αποτελούν μέρος του υπολογισμού για την προσωρινή αποθήκευση δεδομένων.</li>    <li> <code>ApiKeyName</code> : Εάν ο ιστότοπος-στόχος έχει την έννοια κλειδιού API, αυτή η παράμετρος μπορεί να χρησιμοποιηθεί για τον καθορισμό του ονόματος (όχι της τιμής) της παραμέτρου κλειδιού που πρέπει να χρησιμοποιηθεί στη διεύθυνση URL. Η πραγματική τιμή κλειδιού παρέχεται στο διαπιστευτήριο.</li>    <li> <code>Timeout</code> : Ο καθορισμός αυτής της τιμής ως διάρκειας θα αλλάξει το χρονικό όριο για ένα αίτημα HTTP. Η προεπιλεγμένη τιμή είναι 600 δευτερόλεπτα.</li>    <li> <code>EnableBatch</code> : Ένα λογικό (true/false) που ορίζει εάν θα επιτρέπεται η δημιουργία ενός αιτήματος OData $batch εάν γίνει υπέρβαση του MaxUriLength (η προεπιλογή είναι false).</li>    <li> <code>MaxUriLength</code> : Ένας αριθμός που υποδεικνύει το μέγιστο μήκος ενός επιτρεπόμενου uri που αποστέλλεται σε μια υπηρεσία OData. Εάν σημειωθεί υπέρβαση και το EnableBatch είναι αληθές, τότε το αίτημα θα υποβληθεί σε ένα τελικό σημείο $batch OData, διαφορετικά θα αποτύχει (η προεπιλογή είναι 2048).</li>    <li> <code>Concurrent</code> : Ένα λογικό (true/ false) όταν οριστεί σε true, τα αιτήματα στην υπηρεσία θα γίνονται ταυτόχρονα. Όταν οριστεί σε false, τα αιτήματα θα γίνονται διαδοχικά. Όταν δεν καθορίζεται, η τιμή θα καθοριστεί από τον σχολιασμό AsynchronousRequestsSupported της υπηρεσίας. Εάν η υπηρεσία δεν προσδιορίζει εάν υποστηρίζεται το AsynchronousRequestsSupported, τα αιτήματα θα γίνονται διαδοχικά.</li>    <li> <code>ODataVersion</code> : Ένας αριθμός (3 ή 4) που καθορίζει την έκδοση του πρωτοκόλλου OData που θα χρησιμοποιηθεί για αυτό το σκοπό. Υπηρεσία OData. Όταν δεν καθορίζεται, θα ζητηθούν όλες οι υποστηριζόμενες εκδόσεις. Η έκδοση της υπηρεσίας θα καθοριστεί από την κεφαλίδα OData-Version που επιστρέφεται από την υπηρεσία.</li>    <li> <code>FunctionOverloads</code> : Μια λογική (true/false) όταν οριστεί σε true, οι υπερφορτώσεις εισαγωγής συναρτήσεων θα είναι λογικές (true/false) καταχωρούνται στο πρόγραμμα πλοήγησης ως ξεχωριστές καταχωρήσεις, όταν οριστεί σε false, οι υπερφορτώσεις εισαγωγής συναρτήσεων θα παρατίθενται ως μία συνάρτηση ένωσης στο πρόγραμμα πλοήγησης. Προεπιλεγμένη τιμή για το V3: false. Προεπιλεγμένη τιμή για το V4: true.</li>    <li> <code>MoreColumns</code> : Ένα λογικό (true/false) όταν οριστεί σε true, προσθέτει μια στήλη "Περισσότερες στήλες" σε κάθε ροή οντοτήτων που περιέχει ανοιχτούς τύπους και πολυμορφικούς τύπους. Αυτό θα περιέχει τα πεδία που δεν έχουν δηλωθεί στον βασικό τύπο. Όταν είναι false, αυτό το πεδίο δεν υπάρχει. Οι προεπιλογές είναι false.</li>    <li> <code>IncludeAnnotations</code> : Μια λίστα διαχωρισμένη με κόμματα ονομάτων ή μοτίβων όρων που χαρακτηρίζονται από τον χώρο ονομάτων για να συμπεριληφθούν με το "\*" ως μπαλαντέρ. Από προεπιλογή, κανένας από τους σχολιασμούς δεν συμπεριλαμβάνεται.</li>    <li> <code>IncludeMetadataAnnotations</code> : Μια λίστα διαχωρισμένη με κόμματα ονομάτων όρων ή μοτίβων με ειδική περιοχή ονομάτων που θα συμπεριληφθούν στα αιτήματα εγγράφων μεταδεδομένων, με το "\*" ως μπαλαντέρ. Από προεπιλογή, περιλαμβάνει τους ίδιους σχολιασμούς με τους IncludeAnnotations.</li>    <li> <code>OmitValues</code> : Επιτρέπει στην υπηρεσία OData να αποφεύγει τη διαγραφή ορισμένων τιμών στις απαντήσεις. Εάν αναγνωριστεί από την υπηρεσία, θα συμπεράνουμε αυτές τις τιμές από τα πεδία που παραλείπονται. Οι επιλογές περιλαμβάνουν:      <ul>        <li><code>ODataOmitValues.Nulls</code> : Επιτρέπει στην υπηρεσία OData να παραλείψει μηδενικές τιμές.</li>      </ul>    </li>    <li> <code>Implementation</code> : Καθορίζει την υλοποίηση της εφαρμογής σύνδεσης OData προς χρήση. Οι έγκυρες τιμές είναι "2.0" ή null.</li>    </ul>


## Examples

### Example #1 
Συνδεθείτε στην υπηρεσία TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data