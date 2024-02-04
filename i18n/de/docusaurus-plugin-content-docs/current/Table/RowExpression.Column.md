---
title: RowExpression.Column
---

# RowExpression.Column


## Description

Gibt eine abstrakte Syntaxstruktur (Abstract Syntax Tree, AST) zurück, welche den Zugriff auf eine Spalte innerhalb eines Zeilenausdrucks darstellt.


## Syntax

```powerquery
RowExpression.Column(
    columnName as text
) as record
```


## Details

Gibt eine abstrakte Syntaxstruktur (Abstract Syntax Tree, AST) zurück, die den Zugriff auf die Spalte <code>columnName</code> der Zeile innerhalb eines Zeilenausdrucks darstellt.


## Examples

### Example #1 
Erstellt eine AST-Angabe, die den Zugriff auf die Spalte &#34;CustomerName&#34; darstellt.
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
