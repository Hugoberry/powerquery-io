---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Συνάγει τον λεπτομερή τύπο αριθμού (Int64.Type, Double.Type και ούτω καθεξής) ενός αριθμού που είναι κωδικοποιημένος στο κείμενο.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Συνάγει τον τύπο υποδιαίρεσης αριθμού (Int64.Type, Double.Type και ούτω καθεξής) <code>text</code>. Προκύπτει σφάλμα εάν <code>text</code> δεν είναι αριθμός. Μπορεί επίσης να παρασχεθεί μια προαιρετική <code>culture</code> (για παράδειγμα, "en-US").



## Category
Text
