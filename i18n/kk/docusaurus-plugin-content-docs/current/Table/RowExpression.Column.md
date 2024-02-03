---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Жол өрнегіндегі бағанға қатынасу мүмкіндігін беретін дерексіз синтаксистік ағашты (AST) қайтарады.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Жол өрнегіндегі жолдың <code>columnName</code> бағанына қатынасу мүмкіндігін беретін дерексіз синтаксистік ағашты (AST) қайтарады.


## Examples

### Example #1 
&#34;CustomerName&#34; бағанына кіруді көрсететін AST жасайды.
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
