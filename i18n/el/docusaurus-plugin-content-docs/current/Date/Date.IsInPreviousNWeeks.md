---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Υποδεικνύει αν αυτή η ημερομηνία εμφανίζεται στη διάρκεια των προηγούμενων εβδομάδων, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας εβδομάδας.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια των προηγούμενων εβδομάδων, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας εβδομάδας.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> για αξιολόγηση.</li>      <li><code>weeks</code>: Το πλήθος εβδομάδων.</li>      </ul>


## Examples

### Example #1 
Προσδιορίστε αν η εβδομάδα πριν από την τρέχουσα ώρα συστήματος είναι εντός των προηγούμενων δύο εβδομάδων.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
