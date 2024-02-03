---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


## Description

Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια των προηγούμενων λεπτών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος λεπτού.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια των προηγούμενων λεπτών, όπως προσδιορίζονται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός του τρέχοντος λεπτού.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>datetime</code> ή <code>datetimezone</code> προς αξιολόγηση.</li>      <li><code>minutes</code>: Το πλήθος λεπτών.</li>      </ul>


## Examples

### Example #1 
Προσδιορίζει αν το λεπτό πριν από την τρέχουσα ώρα συστήματος είναι εντός των προηγούμενων δύο λεπτών.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
