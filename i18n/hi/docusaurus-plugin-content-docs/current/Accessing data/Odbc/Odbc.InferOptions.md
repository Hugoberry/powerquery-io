---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

यह ODBC ड्राइवर के लिए SQL क्षमताओं को इनफ़र करने का प्रयास करने वाले परिणाम को लौटा देता है.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

यह ODBC का उपयोग करके कनेक्शन स्ट्रिंग <code>connectionString</code> के साथ SQL क्षमताओं को इंफ़र करने के प्रयास के परिणाम को लौटाता है. <code>connectionString</code> गुण के मान युग्मों का पाठ या रिकॉर्ड हो सकता है. गुण के मान या तो पाठ हो सकते हैं या फिर संख्या.


## Examples

### Example #1 
कनेक्शन स्ट्रिंग के लिए अनुमानित SQL क्षमताएँ लौटाना.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
