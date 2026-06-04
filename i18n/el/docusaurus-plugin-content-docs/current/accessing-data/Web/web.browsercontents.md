---
title: Web.BrowserContents
---

# Web.BrowserContents


Επιστρέφει το HTML για την καθορισμένη διεύθυνση URL, όπως προβάλλεται από ένα πρόγραμμα περιήγησης web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Επιστρέφει το HTML για το καθορισμένο `url`, όπως προβάλλεται από ένα πρόγραμμα περιήγησης web. Μπορεί να παρασχεθεί μια προαιρετική παράμετρος εγγραφής, `options`, για τον καθορισμό πρόσθετων ιδιοτήτων. Η εγγραφή μπορεί να περιέχει τα ακόλουθα πεδία:

-   `ApiKeyName`: Αν η τοποθεσία-στόχος έχει την έννοια του κλειδιού API, αυτή η παράμετρος μπορεί να χρησιμοποιηθεί για να καθορίσει το όνομα (όχι την τιμή) της παραμέτρου κλειδιού που πρέπει να χρησιμοποιηθεί στη διεύθυνση URL. Η πραγματική τιμή κλειδιού παρέχεται στα διαπιστευτήρια.
-   `WaitFor`: Καθορίζει μια συνθήκη που πρέπει να περιμένετε πριν από τη λήψη του HTML, εκτός από την αναμονή για τη φόρτωση της σελίδας (κάτι που γίνεται πάντα). Μπορεί να είναι μια εγγραφή που περιέχει πεδία Timeout και/ή Selector. Αν έχει καθοριστεί μόνο ένα Timeout, η συνάρτηση θα περιμένει το χρονικό διάστημα που έχει καθοριστεί πριν από τη λήψη του HTML. Αν έχουν οριστεί και Selector και Timeout, και το Timeout λήξει πριν το Selector εμφανιστεί στη σελίδα, θα εμφανιστεί ένα σφάλμα. Αν ένας Selector οριστεί χωρίς Timeout, εφαρμόζεται ένα προεπιλεγμένο Timeout 30 δευτερολέπτων.


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
Accessing data
