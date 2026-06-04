---
title: Expression.Evaluate
---

# Expression.Evaluate


Επιστρέφει το αποτέλεσμα της αξιολόγησης μιας παράστασης M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Επιστρέφει το αποτέλεσμα της αξιολόγησης μιας παράστασης M `document`, με τα διαθέσιμα αναγνωριστικά στα οποία μπορεί να γίνει αναφορά ορισμένα από `environment`.


## Examples

### Example #1
Αξιολογήστε ένα απλό άθροισμα.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2
Αξιολογήστε ένα πιο σύνθετο άθροισμα.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3
Αξιολογήστε τη συνένωση μιας τιμής κειμένου με ένα αναγνωριστικό.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
