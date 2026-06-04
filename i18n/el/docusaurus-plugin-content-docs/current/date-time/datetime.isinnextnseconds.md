---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια των επόμενων δευτερολέπτων, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος δευτερολέπτου.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια των επόμενων δευτερολέπτων, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος δευτερολέπτου.

-   `dateTime`: Μια τιμή `datetime` ή `datetimezone` προς αξιολόγηση.
-   `seconds`: Το πλήθος δευτερολέπτων.


## Examples

### Example #1
Προσδιορίζει αν το δευτερόλεπτο μετά την τρέχουσα ώρα συστήματος είναι εντός των επόμενων δύο δευτερολέπτων.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
