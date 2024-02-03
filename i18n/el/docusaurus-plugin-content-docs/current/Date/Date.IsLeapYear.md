---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Υποδεικνύει αν αυτή η ημερομηνία εμπίπτει σε δίσεκτο έτος.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Υποδεικνύει αν η δεδομένη τιμή datetime <code>dateTime</code> εμπίπτει σε δίσεκτο έτος.  <ul>        <li><code>dateTime</code>: Μια τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> για αξιολόγηση.</li>      </ul>


## Examples

### Example #1 
Προσδιορίστε αν το έτος 2012, όπως αντιπροσωπεύεται από την &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; είναι ένα δίσεκτο έτος.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
