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

दिए गए <code>value</code> से <code>प्रतिशत</code> मान लौटाता है. यदि दिया गया <code>value</code> <code>नल</code> है, तो <code>Percentage.From</code> <code>नल</code> लौटाता है. यदि दिया गया <code>value</code> ट्रेलिंग प्रतिशत चिह्न वाला <code>पाठ</code> है, तो रूंपातरित दशमलव वाली संख्या लौटायी जाएगी. अन्यथा, इसको <code>संख्या</code>  मान में रुपांतरित करने के लिए <code>Number.From</code> देखें. एक वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
&lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; का मान &lt;code&gt;प्रतिशत&lt;/code&gt; प्राप्त करें.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
