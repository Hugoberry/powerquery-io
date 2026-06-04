---
title: DateTime.From
---

# DateTime.From


Δημιουργεί μια datetime από την τιμή που δόθηκε.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Επιστρέφει μια τιμή `datetime` από το δεδομένο `value`. Μπορεί επίσης να παρέχεται ένα προαιρετικό `culture`(για παράδειγμα, "en-US"). Αν το δεδομένο `value` είναι `null`, το `DateTime.From` επιστρέφει `null`. Αν το δεδομένο `value` είναι `datetime`, επιστρέφει `value`. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή `datetime`:

-   `text`: Μια τιμή `datetime` από αναπαράσταση κειμένου. Ανατρέξτε στο `DateTime.FromText` για λεπτομέρειες.
-   `date`: Ένα `datetime` με `value` ως στοιχείο ημερομηνίας και το `12 :00:00 π.μ.` ως στοιχείο ώρας.
-   `datetimezone`: Το τοπικό `datetime` ισοδύναμο του `value`.
-   `time`: Ένα `datetime` με το ισοδύναμο ημερομηνίας του OLE Automation Date `0` ως στοιχείο ημερομηνίας και `value` ως στοιχείο ώρας.
-   `number`: Ένα ισοδύναμο `datetime` της Ημερομηνίας Αυτοματισμού OLE που εκφράζεται με `value`.

Αν `value` είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1
Μετατρέψτε το `#time(06, 45, 12)` σε τιμή `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Μετατρέψτε το `#date(1975, 4, 4)` σε τιμή `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
