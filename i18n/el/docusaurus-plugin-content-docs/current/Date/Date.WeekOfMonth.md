---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Επιστρέφει έναν αριθμό από 1 έως 6 που υποδεικνύει σε ποια εβδομάδα του μήνα εμπίπτει η ημερομηνία.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Επιστρέφει έναν αριθμό από 1 έως 6 που υποδεικνύει σε ποια εβδομάδα του μήνα εμπίπτει η ημερομηνία <code>dateTime</code>. <ul>        <li><code>dateTime</code>: Μια τιμή <code>datetime</code> για την οποία προσδιορίζεται η εβδομάδα του μήνα.</li>      </ul>


## Examples

### Example #1 
Προσδιορίστε σε ποια εβδομάδα του Μαρτίου εμπίπτει η 15η το 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
