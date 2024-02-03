---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

Υποδεικνύει αν αυτή η τιμή datetime εμφανίζεται στη διάρκεια της προηγούμενης ώρας, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ώρας.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμφανίζεται στη διάρκεια της προηγούμενης ώρας, όπως προσδιορίζεται από την τρέχουσα ημερομηνία και ώρα του συστήματος. Λάβετε υπόψη ότι αυτή η συνάρτηση θα επιστρέψει την τιμή false όταν της διαβιβαστεί μια τιμή που εμφανίζεται εντός της τρέχουσας ώρας.      <ul>      <li><code>dateTime</code>: Μια τιμή <code>datetime</code> ή <code>datetimezone</code> προς αξιολόγηση.</li>      </ul>


## Examples

### Example #1 
Προσδιορίζει αν η ώρα πριν από την τρέχουσα ώρα συστήματος είναι εντός της προηγούμενης ώρας.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
