---
title: DateTime.From
---

# DateTime.From


दिए गए मान से एक datetime बनाता है.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

दिए गए <code>value</code> से एक <code>तिथिसमय</code> मान वापस करता है. वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").यदि दिया गया <code>value</code> <code>नल</code> है, तो <code>DateTime.From</code> <code>नल</code> वापस किया जाता है. यदि दिया गया <code>value</code> <code>तिथिसमय</code> है, तो <code>value</code> वापस किया जाता है. निम्न प्रकार के मानों को एक <code>तिथिसमय</code> मान में रूपांतरित किया जा सकता है:      <ul>        <li><code>पाठ</code>: पाठ प्रस्तुतिकरण से एक <code>तिथिसमय</code> मान. विवरण के लिए <code>DateTime.FromText</code> देखें.</li>        <li><code>तिथि</code>: तिथि घटक के रूप में <code>value</code> और समय घटक के रूप में <code>12:00:00 AM</code> वाला <code>तिथिसमय</code>.</li>        <li><code>datetimezone</code>: <code>value</code> के समतुल्य स्थानीय <code>तिथिसमय</code>.</li>        <li><code>समय</code>: तिथि घटक के रूप में <code>0</code> और समय घटक के रूप में <code>value</code> के OLE स्वचालन तिथि के समतुल्य तिथि वाला <code>तिथिसमय</code>.</li>        <li><code>संख्या</code>: <code>value</code> द्वारा व्यक्त OLE स्वचालन तिथि के समतुल्य तिथि वाला <code>तिथिसमय</code>.</li>      </ul>यदि <code>value</code> किसी भी अन्य प्रकार का है, तो एक त्रुटि वापस की जाती है.


## Examples

### Example #1 
&lt;code&gt;#time(06, 45, 12)&lt;/code&gt; को एक &lt;code&gt;datetime&lt;/code&gt; मान में रूपांतरित करें.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
&lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; को एक &lt;code&gt;datetime&lt;/code&gt; मान में रूपांतरित करें.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
