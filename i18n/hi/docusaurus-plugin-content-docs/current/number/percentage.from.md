---
title: Percentage.From
---

# Percentage.From


दिए गए मान से प्रतिशत मान वापस देता है.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

दिए गए `value` से `प्रतिशत` मान लौटाता है. यदि दिया गया `value` `नल` है, तो `Percentage.From` `नल` लौटाता है. यदि दिया गया `value` ट्रेलिंग प्रतिशत चिह्न वाला `पाठ` है, तो रूंपातरित दशमलव वाली संख्या लौटायी जाएगी. अन्यथा, इसको `संख्या` मान में रुपांतरित करने के लिए `Number.From` देखें. एक वैकल्पिक `culture` भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1
`"12.3%"` का मान `प्रतिशत` प्राप्त करें.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
