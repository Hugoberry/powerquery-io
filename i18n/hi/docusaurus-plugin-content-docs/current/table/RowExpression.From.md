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

<code>function</code> के मुख्य भाग के लिए अमूर्त सिंटैक्स ट्री (AST) देता है, जो <i>row व्यंजक में सामान्यीकृत होता है</i>:<ul>  <li>फ़ंक्शन एक 1-तर्क lambda होना चाहिए</li>  <li>फ़ंक्शन पैरामीटर के सभी संदर्भ <code>RowExpression.Row</code> से बदल दिए गए हैं.</li>  <li>कॉलम के सभी संदर्भ <code>RowExpression.Column(<i>columnName</i>)</code> से बदल दिए गए हैं.</li>  <li>AST को इस प्रकार के केवल नोड्स रखने के लिए सरलीकृत किया जाएगा:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />यदि पंक्ति व्यंजक AST को <code>function</code> के मुख्य भाग के लिए लौटाता नहीं जा सकता, तो कोई त्रुटि उत्पन्न होती है.<br />


## Examples

### Example #1 
फ़ंक्शन &lt;code&gt;each [CustomerID] = &#34;ALFKI&#34;&lt;/code&gt; के मुख्य भाग के लिए AST लौटाता है
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
