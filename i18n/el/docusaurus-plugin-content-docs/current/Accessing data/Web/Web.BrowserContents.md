---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Επιστρέφει το HTML για την καθορισμένη διεύθυνση URL, όπως προβάλλεται από ένα πρόγραμμα περιήγησης web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Επιστρέφει το HTML για το καθορισμένο <code>url</code>, όπως προβάλλεται από ένα πρόγραμμα περιήγησης web. Μπορεί να παρέχεται μια προαιρετική παράμετρος εγγραφής, <code>options</code>, για τον καθορισμό πρόσθετων ιδιοτήτων. Η εγγραφή μπορεί να περιέχει τα ακόλουθα πεδία:     <ul>        <li><code>ApiKeyName</code>: Εάν η τοποθεσία-στόχος έχει την έννοια ενός κλειδιού API, αυτή η παράμετρος μπορεί να χρησιμοποιηθεί για τον καθορισμό του ονόματος (όχι της τιμής) της παραμέτρου κλειδιού που πρέπει να χρησιμοποιηθεί στη διεύθυνση URL. Η πραγματική τιμή κλειδιού παρέχεται στο διαπιστευτήριο.</li>        <li><code>WaitFor</code>: Καθορίζει μια συνθήκη για την οποία πρέπει να περιμένετε πριν από τη λήψη του HTML, επιπλέον της αναμονής για τη φόρτωση της σελίδας (κάτι που γίνεται πάντα). Μπορεί να είναι μια εγγραφή που περιέχει πεδία Timeout και/ή Selector. Εάν έχει καθοριστεί μόνο ένα Timeout, η συνάρτηση θα περιμένει το χρονικό διάστημα που έχει καθοριστεί πριν από τη λήψη του HTML. Εάν έχει καθοριστεί και το Selector και το Timeout και το Timeout λήξης παρέλθει πριν εμφανιστεί το Selector στη σελίδα, θα εμφανιστεί ένα σφάλμα. Εάν έχει καθοριστεί ένα Selector χωρίς Timeout, εφαρμόζεται ένα προεπιλεγμένο χρονικό όριο 30 δευτερολέπτων.</li>      </ul>    


## Examples

### Example #1 
Επιστρέφει τον κώδικα HTML για την τοποθεσία https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Επιστρέφει τον κώδικα HTML για την τοποθεσία https://microsoft.com μετά από αναμονή για την παρουσία επιλογέα CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Επιστρέφει τον κώδικα HTML για την τοποθεσία https://microsoft.com μετά από αναμονή δέκα δευτερολέπτων.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Επιστρέφει τον κώδικα HTML για την τοποθεσία https://microsoft.com μετά από αναμονή έως δέκα δευτερολέπτων για την παρουσία επιλογέα CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Πρόσβαση σε δεδομένα
