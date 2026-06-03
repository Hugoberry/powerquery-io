---
title: Int16.From
---

# Int16.From


दिए गए मान से 16-बिट पूर्णांक बनाता है.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

दिए गए `value` से 16-बिट पूर्णांक `संख्या` मान वापस करता है. यदि दिया गया `value` `नल` है, तो `Int16.From``नल` वापस करता है. यदि दी गई `value` `संख्या` आंशिक भाग के बिना 16-बिट पूर्णांक की श्रेणी में है, तो `value` वापस किया जाता है. यदि उसमें आंशिक भाग है, तो संख्या को राउंडिंग मोड निर्दिष्ट करके राउंड किया जाता है. डिफ़ॉल्ट राउंडिंग कोड `RoundingMode.ToEven` है. यदि `value` किसी अन्य प्रकार का है, तो पहले उसे `Number.FromText` का उपयोग करके `संख्या` में रूपांतरित किया जाएगा. उपलब्ध राउंडिंग मोड के लिए `Number.Round` देखें. वैकल्पिक `culture` भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1
`"4"` का 16-बिट पूर्णांक `संख्यात्मक` मान प्राप्त करें.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`RoundingMode.AwayFromZero` का उपयोग करके `"4.5"` का 16-बिट पूर्णांक `संख्यात्मक` मान प्राप्त करें.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
