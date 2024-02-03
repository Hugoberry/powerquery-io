---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

वह संख्‍या लौटाता है जो फ़ंक्‍शन प्रकार को इनवोक करने के लिए आवश्यक पैरामीटर की न्‍यूनतम संख्‍या दर्शाती है.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

वह संख्‍या लौटाता है जो फ़ंक्‍शन के इनपुट <code>type</code> को इनवोक करने के लिए आवश्‍यक पैरामीटर की न्‍यूनतम संख्‍या दर्शाती है.


## Examples

### Example #1 
फ़ंक्‍शन &lt;code&gt;(x as number, optional y as text)&lt;/code&gt; के लिए आवश्‍यक पैरामीटर की संख्‍या ढूँढें.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
