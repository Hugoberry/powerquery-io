---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Mengembalikan hasil penilaian ungkapan M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Mengembalikan hasil penilaian ungkapan M <code>document</code>, dengan pengecam tersedia yang boleh dirujuk ditakrifkan oleh <code>environment</code>.


## Examples

### Example #1 
Nilaikan jumlah mudah.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Nilaikan jumlah yang lebih rumit.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Nilaikan perangkaian nilai teks dengan pengecam.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
