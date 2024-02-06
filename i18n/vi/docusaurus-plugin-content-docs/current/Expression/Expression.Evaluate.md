---
title: Expression.Evaluate
---

# Expression.Evaluate


Trả về kết quả đánh giá biểu thức M.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Remarks

Trả về kết quả đánh giá biểu thức M <code>document</code>, với các mã định danh có sẵn có thể được tham chiếu và xác định theo <code>environment</code>.


## Examples

### Example #1 
Đánh giá một tổng đơn giản.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Đánh giá một tổng phức tạp hơn.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Đánh giá quá trình ghép giá trị văn bản với mã định danh.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
