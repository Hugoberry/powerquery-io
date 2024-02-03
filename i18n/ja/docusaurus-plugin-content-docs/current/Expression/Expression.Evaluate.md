---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

M 式の評価結果を返します。


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

M 式 <code>document</code> の評価結果を返します。参照できる使用可能な識別子は <code>environment</code> によって定義されます。


## Examples

### Example #1 
単純な合計を評価します。
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
複雑な合計を評価します。
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
テキスト値と識別子の連結を評価します。
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
