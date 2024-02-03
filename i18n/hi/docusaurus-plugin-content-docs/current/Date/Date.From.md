---
title: Date.From
---

# Date.From


## Description

दिए गए मान से एक दिनांक बनाता है.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

दिए गए <code>value</code> से एक <code>दिनांक</code> मान वापस करता है. वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").यदि दिया गया <code>value</code> <code>नल</code> है, तो <code> Date.From</code> <code>नल</code> वापस करता है. यदि दिया गया <code>value</code> <code>दिनांक</code> है, तो <code>value</code> वापस किया जाता है. निम्न प्रकार के मानों को एक <code>दिनांक</code> मान में रूपांतरित किया जा सकता है:      <ul>        <li><code>पाठ</code>: पाठ प्रस्तुतिकरण से एक <code>दिनांक</code> मान. विवरण के लिए <code>Date.FromText</code> देखें.</li> <li><code>तिथिसमय</code>: <code>value</code> का तिथि घटक.</li>        <li><code>datetimezone</code>: स्थानीय तिथिसमय का तिथि घटक <code>value</code> के समतुल्य.</li>        <li><code>number</code>: तिथिसमय का दिनांक घटक जो OLE स्वचालन दिनांक के बराबर है, जिसे <code>value</code> द्वारा व्यक्त किया जाता है.</li>      </ul>यदि <code>value</code> किसी अन्य प्रकार का है, तो त्रुटि वापस की जाती है.


## Examples

### Example #1 
&lt;code&gt;43910&lt;/code&gt; को एक &lt;code&gt;date&lt;/code&gt; मान में रूपांतरित करें.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; को एक &lt;code&gt;date&lt;/code&gt; मान में रूपांतरित करें.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
