---
title: Time.From
---

# Time.From


Δημιουργεί μια ώρα από την παρεχόμενη τιμή.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Επιστρέφει μια τιμή `time` από το δεδομένο `value`. Μπορεί επίσης να παρέχεται ένα προαιρετικό `culture` (για παράδειγμα, "en-US"). Αν το δεδομένο`value` είναι `null`, το `Time.From` επιστρέφει `null`. Αν το δεδομένο `value` είναι `ώρα`, επιστρέφεται `value`. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή `time`:

-   `text`: Μια τιμή `time` από αναπαράσταση κειμένου. Ανατρέξτε στο `Time.FromText` για λεπτομέρειες.
-   `datetime`: Το στοιχείο ώρας του `value`.
-   `datetimezone`: Το στοιχείο ώρας του τοπικού ισοδύναμου ημερομηνίας ώρας του `value`.
-   `number`: Ένας `time` ισοδύναμος με τον αριθμό των κλασματικών ημερών που εκφράζεται με `value`. Αν `value` είναι αρνητικό ή μεγαλύτερο ή ίσο με 1, επιστρέφεται ένα σφάλμα.

Αν `value` είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1
Μετατρέψτε το `0.7575` σε μια τιμή `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Μετατρέψτε το `#datetime(1899, 12, 30, 06, 45, 12)` σε μια τιμή `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
