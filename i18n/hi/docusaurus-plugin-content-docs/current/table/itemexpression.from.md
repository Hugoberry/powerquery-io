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

<code>function</code> के मुख्य भाग के लिए सारांश सिंटैक्स ट्री (AST) वापस करता है, जो <i>आइटम व्यंजक</i> में सामान्यीकृत होता है:<ul>  <li>फ़ंक्शन 1-तर्क lambda होना चाहिए.</li>  <li>फ़ंक्शन पैरामीटर के सभी संदर्भ <code>ItemExpression.Item</code> से बदल दिए गए हैं.</li>  <li>AST को केवल इस प्रकार के नोड्स रखने के लिए सरलीकृत किया जाएगा:    <ul>      <li><code>Constant</code></li>      <li><code>Invocation</code></li>      <li><code>Unary</code></li>      <li><code>Binary</code></li>      <li><code>If</code></li>      <li><code>FieldAccess</code></li>    </ul>  </li></ul><br /><br />त्रुटि उत्पन्न होती है, यदि <code>function</code> के मुख्य भाग के लिए आइटम व्यंजक AST लौटाया नहीं किया जा सकता.<br />


## Examples

### Example #1 
&lt;code&gt;each _ &lt;&gt; null&lt;/code&gt; फ़ंक्‍शन के मुख्य संदेश के लिए AST लौटाता है
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
