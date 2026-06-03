---
title: Double.From
---

# Double.From


दिए गए मान से दोहरा मान बनाता है.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

दिए गए `value` से दशमलव `संख्या` मान वापस करता है. यदि दिया गया `value` `नल` है, तो `Decimal.From` `नल` वापस करता है. यदि दी गई `value` `संख्या` है जो दशमलव की श्रेणी में है, तो `value` वापस किया जाता है अन्यथा त्रुटि वापस की जाती है. यदि `value` किसी अन्य प्रकार का है, तो पहले वह `Number.FromText` का उपयोग करके `संख्या` में रूपांतरित होगा. वैकल्पिक `culture` भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1
`"4"` का दोगुना `संख्यात्मक` मान प्राप्त करें.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
