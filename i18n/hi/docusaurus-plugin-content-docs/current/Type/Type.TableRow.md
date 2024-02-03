---
title: Type.TableRow
---

# Type.TableRow


## Description

तालिका प्रकार का स्तंभ प्रकार लौटाता है.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

निर्दिष्ट तालिका प्रकार का पंक्ति प्रकार लौटाता है. परिणाम हमेशा एक रिकॉर्ड प्रकार होगा.


## Examples

### Example #1 
किसी साधारण तालिका के लिए पंक्ति प्रकार जानकारी लौटाता है.
```powerquery
let
    tableRowType = Type.TableRow(Value.Type(#table({"Column1"}, {})))
in
    Type.RecordFields(tableRowType)
```

Result: 
```powerquery
[Column1 = [Type = type any, Optional = false]]
```




## Category
Type
