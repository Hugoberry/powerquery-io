---
title: Table.ToList
---

# Table.ToList


## Description

Μετατρέπει έναν πίνακα σε λίστα εφαρμόζοντας την καθορισμένη συνάρτηση συνδυασμού σε κάθε γραμμή τιμών του πίνακα.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Μετατρέπει έναν πίνακα σε λίστα εφαρμόζοντας την καθορισμένη συνάρτηση συνδυασμού σε κάθε γραμμή τιμών του πίνακα.


## Examples

### Example #1 
Συνδυάζει το κείμενο κάθε σειράς με κόμμα.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
