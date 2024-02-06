---
title: Expression.Evaluate
---

# Expression.Evaluate


傳回評估 M 運算式的結果。


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

傳回評估 M 運算式 <code>document</code> 的結果，以及 <code>environment</code> 所定義可參考的可用識別碼。


## Examples

### Example #1 
評估簡易加總。
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
評估更複雜的加總。
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
評估具有識別碼之文字值的串連。
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
