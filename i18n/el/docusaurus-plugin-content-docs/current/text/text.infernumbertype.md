---
title: Text.InferNumberType
---

# Text.InferNumberType


Συνάγει τον λεπτομερή τύπο αριθμού (Int64.Type, Double.Type και ούτω καθεξής) ενός αριθμού που είναι κωδικοποιημένος στο κείμενο.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Συνάγει τον τύπο υποδιαίρεσης αριθμού (Int64.Type, Double.Type και ούτω καθεξής) `text`. Προκύπτει σφάλμα εάν `text` δεν είναι αριθμός. Μπορεί επίσης να παρασχεθεί μια προαιρετική `culture` (για παράδειγμα, "en-US").



## Category
Text
