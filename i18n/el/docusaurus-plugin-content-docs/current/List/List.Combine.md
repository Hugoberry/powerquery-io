---
title: List.Combine
---

# List.Combine


## Description

Επιστρέφει μία λίστα συνδυάζοντας πολλές λίστες.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Λαμβάνει μια λίστα από λίστες, <code>lists</code>, και τις συγχωνεύει σε μία νέα λίστα.


## Examples

### Example #1 
Συνδυάστε τις δύο απλές λίστες \{1, 2} και \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Συνδυάστε τις δύο λίστες, \{1, 2} και \{3, \{4, 5}}, μία από τις οποίες περιέχει μια ένθετη λίστα.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
