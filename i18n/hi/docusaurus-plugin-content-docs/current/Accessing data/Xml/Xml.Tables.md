---
title: Xml.Tables
---

# Xml.Tables


XML दस्तावेज़ की सामग्रियों को एक फ्लैटेंड तालिका के नेस्टेड संग्रह के रूप में लौटाता है.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

XML दस्तावेज़ की सामग्रियों को एक फ्लैटेंड तालिका के नेस्टेड संग्रह के रूप में लौटाता है.


## Examples

### Example #1 
स्थानीय xml फ़ाइल की सामग्री को पुनर्प्राप्त करें.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
