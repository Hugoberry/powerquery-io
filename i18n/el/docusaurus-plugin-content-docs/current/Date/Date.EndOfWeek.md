---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Επιστρέφει το τέλος της εβδομάδας.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Επιστρέφει το τέλος της εβδομάδας που περιέχει <code>dateTime</code>.    Αυτή η συνάρτηση λαμβάνει ένα προαιρετικό <code>Day</code>, <code>firstDayOfWeek</code>, για να οριστεί ως η πρώτη ημέρα της εβδομάδας για αυτόν τον σχετικό υπολογισμό. Η προεπιλεγμένη τιμή είναι <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> από την οποία υπολογίζεται η τελευταία ημέρα της εβδομάδας</li>        <li><code>firstDayOfWeek</code>:  <i>[Προαιρετικό]</i> Μια τιμή <code>Day.Type</code> που αντιπροσωπεύει την πρώτη ημέρα της εβδομάδας. Πιθανές τιμές είναι <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code> Day.Phursday</code>, <code>Day.Priday</code> και <code>Day.Saturday.</code> . Η προεπιλεγμένη τιμή είναι <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Λάβετε το τέλος της εβδομάδας για τις 14/5/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Υπολογίστε το τέλος της εβδομάδας για τις 17/5/2011 05:00:00 μ.μ. -7:00, με την Κυριακή (προεπιλογή) να είναι η πρώτη ημέρα της εβδομάδας.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
