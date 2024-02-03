---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Menghasilkan hasil evaluasi ekspresi M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Menghasilkan hasil evaluasi ekspresi M <code>document</code>, dengan pengidentifikasi yang tersedia yang dapat direferensikan oleh <code>environment</code>.


## Examples

### Example #1 
Evaluasi jumlah sederhana.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Evaluasi jumlah yang lebih kompleks.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Evaluasi penggabungan nilai teks dengan pengidentifikasi.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
