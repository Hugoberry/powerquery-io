---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στη διάρκεια των επόμενων ετών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος έτους.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια των επόμενων ετών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος έτους.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> για αξιολόγηση.</li>      <li><code>years</code>: Το πλήθος ετών.</li>      </ul>


## Examples

### Example #1 
Προσδιορίστε αν το έτος μετά την τρέχουσα ώρα συστήματος είναι εντός των επόμενων δύο ετών.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
