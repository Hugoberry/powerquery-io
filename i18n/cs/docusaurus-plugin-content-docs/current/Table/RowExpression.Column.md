---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Vrátí strom abstraktní syntaxe (AST), který představuje přístup ke sloupci řádku v rámci výrazu řádku.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Vrátí strom abstraktní syntaxe (AST), který představuje přístup ke sloupci řádku (<code>columnName</code>) v rámci výrazu řádku.


## Examples

### Example #1 
Vytvoří AST reprezentující přístup ke sloupci NázevZákazníka.
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
