---
title: ItemExpression.From
---

# ItemExpression.From


İşlevin gövdesi için soyut söz dizimi ağacını (AST) döndürür.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

`function` gövdesine ilişkin soyut sözdizim ağacını (AST) döndürür, *bir öğe ifadesine* normalleştirilmiş olarak:

-   İşlevin 1 bağımsız değişkenli lambda olması gerekir.
-   İşlev parametresine yönelik tüm başvurular `ItemExpression.Item` ile değiştirilir.
-   AST, yalnızca şu tip düğümleri içerecek şekilde basitleştirilir:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

`function` gövdesi için bir öğe ifadesi AST'si döndürülemezse bir hata oluşur.  
  
Bu işlev, `RowExpression.From` ile aynıdır.


## Examples

### Example #1
`each _ <> null` işlevinin gövdesi için AST'yi döndürür.
```powerquery
ItemExpression.From(each _ <> null)
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "NotEquals",
    Left = ItemExpression.Item,
    Right =
    [
        Kind = "Constant",
        Value = null
    ]
]
```




## Category
Table.Table construction
