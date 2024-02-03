---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια των επόμενων ωρών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ώρας.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια των επόμενων ωρών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ώρας.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>datetime</code> ή <code>datetimezone</code> προς αξιολόγηση.</li>      <li><code>hours</code>: Το πλήθος ωρών.</li>      </ul>


## Examples

### Example #1 
Προσδιορίζει αν η ώρα μετά την τρέχουσα ώρα συστήματος είναι εντός των επόμενων δύο ωρών.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
