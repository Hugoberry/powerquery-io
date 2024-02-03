---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


## Description

Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στη διάρκεια του προηγούμενου έτους, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος έτους.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια του προηγούμενου έτους, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος έτους.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> προς αξιολόγηση.</li>      </ul>


## Examples

### Example #1 
Προσδιορίστε αν το έτος πριν από την τρέχουσα ώρα συστήματος είναι εντός του προηγούμενου έτους.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
