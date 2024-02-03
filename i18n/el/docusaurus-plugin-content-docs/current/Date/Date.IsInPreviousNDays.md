---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στη διάρκεια των προηγούμενων ημερών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ημέρας.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια των προηγούμενων ημερών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ημέρας.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> για αξιολόγηση.</li>      <li><code>days</code>: Το πλήθος ημερών.</li>      </ul>


## Examples

### Example #1 
Προσδιορίστε αν η ημέρα πριν από την τρέχουσα ώρα συστήματος είναι εντός των προηγούμενων δύο ημερών.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
