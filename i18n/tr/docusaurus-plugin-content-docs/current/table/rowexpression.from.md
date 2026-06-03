---
title: RowExpression.From
---

# RowExpression.From


İşlevin gövdesi için soyut söz dizimi ağacını (AST) döndürür.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

`function` gövdesine ilişkin soyut sözdizim ağacını (AST) döndürür, *bir satır ifadesine* normalleştirilmiş olarak:

-   İşlevin 1 bağımsız değişkenli lambda olması gerekir.
-   İşlev parametresine yönelik tüm başvurular `RowExpression.Row` ile değiştirilir.
-   Sütunlara yönelik tüm başvurular `RowExpression.Column(columnName)` ile değiştirilir.
-   AST, yalnızca şu tip düğümleri içerecek şekilde basitleştirilir:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

`function` gövdesi için satır ifadesi AST'sinin döndürülemediği durumlarda hata oluşur.  
  
Bu işlev, `ItemExpression.From` ile aynıdır.


## Examples

### Example #1
`each [CustomerID] = "ALFKI"` işlev gövdesine ilişkin AST'yi döndürür.
```powerquery
RowExpression.From(each [CustomerName] = "ALFKI")
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "Equals",
    Left = RowExpression.Column("CustomerName"),
    Right =
    [
        Kind = "Constant",
        Value = "ALFKI"
    ]
]
```




## Category
Table.Table construction
