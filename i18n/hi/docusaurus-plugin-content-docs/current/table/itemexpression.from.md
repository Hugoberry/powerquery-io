---
title: ItemExpression.From
---

# ItemExpression.From


किसी फ़ंक्शन के मुख्य भाग के लिए सारांश सिंटैक्स ट्री (AST) वापस करता है.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

`function` के मुख्य भाग के लिए अमूर्त सिंटैक्स ट्री (AST) लौटाता है, जिसे एक *आइटम व्यंजक* में सामान्यीकृत किया गया है:

-   फ़ंक्शन एक 1-आर्गुमेंट लैम्डा होना चाहिए.
-   फ़ंक्शन पैरामीटर के सभी संदर्भ `ItemExpression.Item` से बदल दिए गए हैं.
-   AST को सरल बनाकर उसमें केवल निम्नलिखित प्रकार के नोड्स शामिल किए जाएँगे:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

अगर `function` के मुख्य भाग के लिए कोई आइटम व्यंजक AST वापस नहीं किया जा सकता है, तो एक त्रुटि उत्पन्न होती है.  
  
यह फ़ंक्शन `RowExpression.From` के समरूप है.


## Examples

### Example #1
`each _ <> null` फ़ंक्शन के मुख्य भाग का AST लौटाता है.
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
