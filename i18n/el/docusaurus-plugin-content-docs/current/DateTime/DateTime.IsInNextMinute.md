---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια του επόμενου λεπτού, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος λεπτού.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια του επόμενου λεπτού, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος λεπτού.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>datetime</code> ή <code>datetimezone</code> προς αξιολόγηση.</li>      </ul>


## Examples

### Example #1 
Προσδιορίζει αν το λεπτό μετά την τρέχουσα ώρα συστήματος είναι εντός του επόμενου λεπτού.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
