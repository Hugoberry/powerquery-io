---
title: Binary.From
---

# Binary.From


दिए गए मान से एक बाइनरी बनाता है


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

दिए गए `value` से `बाइनरी` मान वापस करता है. यदि दिया गया `value` `नल` है, तो `Binary.From` `नल` वापस करता है. यदि दिया गया `value` `बाइनरी` है, तो `value` वापस किया जाता है. Values निम्न प्रकार के मान को `बाइनरी` मान का उपयोग करके रूपांतरित किया जा सकता है:

-   `पाठ`: पाठ प्रस्तुतिकरण से `बाइनरी` मान. विवरण के लिए `Binary.FromText` का संदर्भ लें.

यदि `value` किसी अन्य प्रकार का है, तो त्रुटि वापस की जाती है.


## Examples

### Example #1
`"1011"` का `binary` मान प्राप्त करें.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
