---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


## Description

Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια των επόμενων δευτερολέπτων, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος δευτερολέπτου.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια των επόμενων δευτερολέπτων, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος δευτερολέπτου.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>datetime</code> ή <code>datetimezone</code> προς αξιολόγηση.</li>      <li><code>seconds</code>: Το πλήθος δευτερολέπτων.</li>      </ul>


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
