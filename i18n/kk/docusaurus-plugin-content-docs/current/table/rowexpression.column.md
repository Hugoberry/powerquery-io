---
title: RowExpression.Column
---

# RowExpression.Column


Жол өрнегіндегі бағанға қатынасу мүмкіндігін беретін дерексіз синтаксистік ағашты (AST) қайтарады.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Remarks

Жол өрнегіндегі жолдың `columnName` бағанына қатынасу мүмкіндігін беретін дерексіз синтаксистік ағашты (AST) қайтарады.


## Examples

### Example #1
"CustomerName" бағанына кіруді көрсететін AST жасайды.
```powerquery
RowExpression.Column("CustomerName")
```

Result: 
```powerquery
[
    Kind = "FieldAccess",
    Expression = RowExpression.Row,
    MemberName = "CustomerName"
]
```




## Category
Table.Table construction
