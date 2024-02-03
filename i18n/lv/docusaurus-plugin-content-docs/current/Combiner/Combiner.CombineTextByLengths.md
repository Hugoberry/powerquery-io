---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Atgriež funkciju, kas kombinē teksta sarakstu, izmantojot norādītos garumus.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Atgriež funkciju, kas teksta vērtību sarakstu kombinē vienā teksta vērtībā, izmantojot norādītos garumus.


## Examples

### Example #1 
Kombinēt teksta vērtību sarakstu, no katras ievades vērtības izvelkot norādītos rakstzīmju daudzumus.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Kombinēt teksta vērtību sarakstu, izvelkot norādītos rakstzīmju daudzumus, pirms tam aizpildot rezultātu ar veidnes tekstu.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
