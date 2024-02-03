---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Επιστρέφει το αποτέλεσμα της αξιολόγησης μιας παράστασης M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Επιστρέφει το αποτέλεσμα της αξιολόγησης μιας παράστασης M <code>document</code>, με τα διαθέσιμα αναγνωριστικά στα οποία μπορεί να γίνει αναφορά ορισμένα από <code>environment</code>.


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
