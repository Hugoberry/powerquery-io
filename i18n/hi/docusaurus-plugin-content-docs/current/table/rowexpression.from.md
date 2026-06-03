---
title: RowExpression.From
---

# RowExpression.From


किसी फ़ंक्शन के मुख्य भाग के लिए सारांश सिंटैक्स ट्री (AST) वापस करता है.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

`function` के मुख्य भाग के लिए अमूर्त सिंटैक्स ट्री (AST) लौटाता है, जिसे एक *पंक्ति व्यंजक* में सामान्यीकृत किया गया है:

-   फ़ंक्शन एक 1-आर्गुमेंट लैम्डा होना चाहिए.
-   फ़ंक्शन पैरामीटर के सभी संदर्भों को `RowExpression.Row` से बदल दिया जाता है.
-   कॉलम के सभी संदर्भों को `RowExpression.Column(columnName)` से बदल दिया जाता है.
-   AST को सरल बनाकर उसमें केवल निम्नलिखित प्रकार के नोड्स शामिल किए जाएँगे:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

अगर `function` के मुख्य भाग के लिए कोई पंक्ति व्यंजक AST वापस नहीं किया जा सकता है, तो एक त्रुटि उत्पन्न होती है.  
  
यह फ़ंक्शन `ItemExpression.From` के समान है.


## Examples

### Example #1
फ़ंक्शन `each [CustomerID] = "ALFKI"` के मुख्य भाग का AST लौटाता है.
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
