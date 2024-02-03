---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Επιστρέφει έναν αριθμό από 1 έως 54 που υποδεικνύει σε ποια εβδομάδα του έτους εμπίπτει αυτή η ημερομηνία.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Επιστρέφει έναν αριθμό από 1 έως 54 που υποδεικνύει σε ποια εβδομάδα του έτους εμπίπτει η ημερομηνία, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Μια τιμή <code>datetime</code> για την οποία προσδιορίζεται η εβδομάδα του έτους.</li>        <li><code>firstDayOfWeek</code>: Μια προαιρετική τιμή <code>Day.Type</code> που υποδεικνύει ποια ημέρα θεωρείται η έναρξη μιας νέας εβδομάδας (για παράδειγμα, <code>Day.Sunday</code>). Αν δεν καθορίζεται, χρησιμοποιείται η προεπιλογή βάσει κουλτούρας.</li>      </ul>


## Examples

### Example #1 
Προσδιορίστε ποια εβδομάδα του έτους περιέχει την 27η Μαρτίου 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Προσδιορίστε ποια εβδομάδα του έτους περιέχει την 27η Μαρτίου 2011, χρησιμοποιώντας τη Δευτέρα ως αρχή της εβδομάδας.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
