---
title: Table.View
---

# Table.View


## Description

क्वेरी और कार्रवाइयों के निष्पादन के लिए उपयोगकर्ता-परिभाषित हैंडलर वाली तालिका बनाता है या विस्तारित करता है.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

<code>table</code> का एक दृश्य लौटाता है, जिसमें दृश्य पर कार्रवाई के लागू होने पर, <code>handlers</code> में निर्दिष्ट फ़ंक्शन का उपयोग कार्रवाई के डिफ़ॉल्ट व्यवहार के स्थान पर किया जाता है.<br />यदि <code>table</code> प्रदान किया जाता है, तो सभी हैंडलर फ़ंक्शन्स वैकल्पिक होते हैं. यदि <code>table</code> प्रदान नहीं किया जाता है, तो <code>GetType</code> और <code>GetRows</code> हैंडलर फ़ंक्शन आवश्यक होते हैं. यदि किसी कार्रवाई के लिए हैंडलर फ़ंक्शन निर्दिष्ट नहीं किया जाता है, तो इसके बजाय <code>table</code> पर कार्रवाई का डिफ़ॉल्ट व्यवहार लागू किया जाता है (<code>GetExpression</code>की स्थिति को छोड़कर).<br />हैंडलर फ़ंक्शन्स को ऐसा मान लौटाना चाहिए जो <code>table</code> (या <code>GetExpression</code> की स्थिति में परिणामी दृश्य) के लिए कार्रवाई को लागू करने के परिणाम के सीमेंटिक रूप से समतुल्य हो.<br />यदि कोई हैंडलर फ़ंक्शन एक त्रुटि देता है, तो दृश्य पर कार्रवाई का डिफ़ॉल्ट व्यवहार लागू होता है.<br /><code>Table.View</code> का उपयोग डेटास्रोत पर फ़ोल्डिंग कार्यान्वित करने – M क्वेरीज़ का स्रोत-विशिष्ट क्वेरीज़ में रूपांतरण करने (उदाहरण के लिए, M क्वेरी से T-SQL विवरण बनाने) के लिए किया जा सकता है.<br /> <code>Table के अधिक पूर्ण विवरण के लिए Power Query कस्टम कनेक्टर का प्रकाशित दस्तावेज़ देखें.View</code>.<br />


## Examples

### Example #1 
कोई ऐसा मूल दृश्य बनाएँ जिसे प्रकार या पंक्ति गणना निर्धारित करने के लिए पंक्तियों तक पहुँचने की आवश्यकता न हो.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
