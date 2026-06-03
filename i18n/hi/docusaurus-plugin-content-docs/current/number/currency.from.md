---
title: Currency.From
---

# Currency.From


दिए गए मूल्य से मुद्रा मूल्य लौटाता है.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

दिए गए `value` से `currency` मान वापस करता है. यदि दिया गया `value` `नल` है, तो `Currency.From` `नल` वापस करता है. यदि दिया गया `value` मुद्रा की श्रेणी में `संख्या` है, तो `value` के आंशिक भाग को 4 दशमलव अंकों में पूरा बनाकर वापस किया जाता है. यदि`value` किसी अन्य प्रकार का है, तो उसे सबसे पहले `Number.FromText`का उपयोग करके `संख्या` में रूपांतरित किया जाएगा. मुद्रा के लिए मान्य श्रेणी `-922,337,203,685,477.5808` से लेकर `922,337,203,685,477.5807`है. उपलब्ध राउंडिंग मोड के लिए`Number.Round` देखें. डिफ़ॉल्ट `RoundingMode.ToEven` है. वैकल्पिक `culture` भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1
`"1.23455"` का `मुद्रा` मूल्य प्राप्त करें.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
`RoundingMode.Down` का उपयोग करके `"1.23455"` का `मुद्रा` मान प्राप्त करें.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
