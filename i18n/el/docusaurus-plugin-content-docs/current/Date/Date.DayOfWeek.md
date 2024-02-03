---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Επιστρέφει έναν αριθμό (από 0 έως 6) που υποδεικνύει την ημέρα της εβδομάδας από την παρεχόμενη τιμή.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Επιστρέφει έναν αριθμό (από 0 έως 6) που υποδεικνύει την ημέρα της εβδομάδας από το παρεχόμενο στοιχείο <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code>: Μια τιμή <code>Day</code> που υποδεικνύει ποια ημέρα πρέπει να θεωρείται η πρώτη ημέρα της εβδομάδας. Οι επιτρεπόμενες τιμές είναι Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday ή Day.Saturday. Αν δεν καθορίζεται, χρησιμοποιείται μια προεπιλογή που εξαρτάται από την κουλτούρα.</li>      </ul>


## Examples

### Example #1 
Υπολογίστε την ημέρα της εβδομάδας που αντιπροσωπεύει η Δευτέρα, 21 Φεβρουαρίου 2011, θεωρώντας την Κυριακή ως πρώτη ημέρα της εβδομάδας.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Υπολογίστε την ημέρα της εβδομάδας που αντιπροσωπεύει η Δευτέρα, 21 Φεβρουαρίου 2011, θεωρώντας τη Δευτέρα ως πρώτη ημέρα της εβδομάδας.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
