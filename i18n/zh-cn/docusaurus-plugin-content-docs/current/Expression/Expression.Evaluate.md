---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

返回 M 表达式的计算结果。


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

返回 M 表达式 <code>document</code> 的计算结果，其中可用的标识符可以由 <code>environment</code> 进行引用和定义。


## Examples

### Example #1 
计算简单求和。
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
计算更复杂的求和。
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
计算含标识符的文本值的串联。
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
