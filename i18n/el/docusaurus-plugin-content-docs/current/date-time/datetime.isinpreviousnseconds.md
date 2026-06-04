---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια των προηγούμενων δευτερολέπτων, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος δευτερολέπτου.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια των προηγούμενων δευτερολέπτων, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος δευτερολέπτου.

-   `dateTime`: Μια τιμή `datetime` ή `datetimezone` προς αξιολόγηση.
-   `seconds`: Το πλήθος δευτερολέπτων.


## Examples

### Example #1
Προσδιορίζει αν το δευτερόλεπτο πριν από την τρέχουσα ώρα συστήματος είναι εντός των προηγούμενων δύο δευτερολέπτων.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
