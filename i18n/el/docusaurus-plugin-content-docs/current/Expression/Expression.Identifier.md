---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Επιστρέφει την αναπαράσταση κώδικα προέλευσης M ενός αναγνωριστικού.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Επιστρέφει την αναπαράσταση κώδικα προέλευσης M ενός αναγνωριστικού <code>name</code>.


## Examples

### Example #1 
Λάβετε την αναπαράσταση κώδικα προέλευσης M ενός αναγνωριστικού.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Λάβετε την αναπαράσταση κώδικα προέλευσης M ενός αναγνωριστικού που περιέχει ένα κενό διάστημα.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
