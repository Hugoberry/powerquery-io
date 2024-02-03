---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στη διάρκεια των προηγούμενων μηνών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος μήνα.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια των προηγούμενων μηνών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος μήνα.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> για αξιολόγηση.</li>      <li><code>months</code>: Το πλήθος μηνών.</li>      </ul>


## Examples

### Example #1 
Προσδιορίστε αν ο μήνας πριν από την τρέχουσα ώρα συστήματος είναι εντός των προηγούμενων δύο μηνών.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
