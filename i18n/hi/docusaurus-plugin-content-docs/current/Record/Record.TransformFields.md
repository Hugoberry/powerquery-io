---
title: Record.TransformFields
---

# Record.TransformFields


निर्दिष्ट ट्रांसफ़ॉर्मेशन लागू करने के बाद एक रिकॉर्ड लौटाता है.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

सूची <code>transformOperations</code> में निर्दिष्ट रूपांतरण <code>record</code> पर लागू करने के बाद एक रिकॉर्ड लौटाता है.    किसी दिए गए समय पर एक या अधिक फ़ील्ड रूपांतरित किए जा सकते हैं.      <div>किसी एकल फ़ील्ड को रूपांतरित किए जाने की स्थिति में, <code>transformOperations</code> से दो आइटम वाली सूची होना अपेक्षित है. <code>transformOperations</code> का पहला आइटम एक फ़ील्ड नाम निर्दिष्ट करता है और <code>transformOperations</code> का दूसरा आइटम रूपांतरण के लिए उपयोग किया जाने वाला फ़ंक्शन निर्दिष्ट करता है. उदाहरण के लिए, <code>\{"Quantity", Number.FromText}</code></div>      <div>एकाधिक फ़ील्ड को रूपांतरित किए जाने की स्थिति में, <code>transformOperations</code> से बहुत सारे आइटम की सूची होना अपेक्षित है, जहाँ प्रत्येक आंतरिक सूची फ़ील्ड नाम और रूपांतरण संचालन का युग्म है. उदाहरण के लिए, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
&#34;मूल्य&#34; फ़ील्ड को संख्या में रूपांतरित करें.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2 
&#34;OrderID&#34; और &#34;मूल्य&#34; फ़ील्ड को संख्या में रूपांतरित करें.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
