---
title: Time.From
---

# Time.From


दिए गए मान से एक समय बनाता है.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

दिए गए <code>value</code> से एक <code>समय</code> मान लौटाता है. एक वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").यदि दिया गया <code>value</code> <code>नल</code> है, तो <code>Time.From</code> <code>नल</code> लौटाता है. यदि दिया गया <code>value</code> <code>समय</code> है, तो <code>value</code> लौटाया जाता है. निम्न प्रकार के मानों को एक <code>समय</code> मान में रूपांतरित किया जा सकता है:      <ul>        <li><code>पाठ</code>: पाठ प्रस्तुतिकरण से एक <code>समय</code> मान. विवरण के लिए <code>Time.FromText</code> देखें.</li>        <li><code>तिथिसमय</code>: <code>value</code> का समय घटक.</li>        <li><code>datetimezone</code>: <code>value</code> के समतुल्य स्थानीय तिथिसमय का समय घटक.</li>        <li><code>संख्या</code>: <code>value</code> द्वारा व्यक्त आंशिक दिनों की संख्या के समतुल्य <code>समय</code>. अगर <code>value</code> ऋणात्मक या 1 से बड़ा या उसके बराबर है, तो एक त्रुटि लौटाई जाती है.</li>      </ul>अगर <code>value</code> किसी भी अन्य प्रकार का है, तो एक त्रुटि लौटाई जाती है.


## Examples

### Example #1 
&lt;code&gt;0.7575&lt;/code&gt; को एक &lt;code&gt;time&lt;/code&gt; मान में रूपांतरित करें.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; को एक &lt;code&gt;time&lt;/code&gt; मान में रूपांतरित करें.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
