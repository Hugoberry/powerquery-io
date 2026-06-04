---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια των επόμενων λεπτών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος λεπτού.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Υποδεικνύει αν η δεδομένη τιμή datetime `dateTime` εμφανίζεται στη διάρκεια των επόμενων λεπτών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος λεπτού.

-   `dateTime`: Μια τιμή `datetime` ή `datetimezone` προς αξιολόγηση.
-   `minutes`: Το πλήθος λεπτών.


## Examples

### Example #1
Προσδιορίζει αν το λεπτό μετά την τρέχουσα ώρα συστήματος είναι εντός των επόμενων δύο λεπτών.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
