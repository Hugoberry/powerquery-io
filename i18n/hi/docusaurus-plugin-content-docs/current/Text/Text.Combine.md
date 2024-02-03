---
title: Text.Combine
---

# Text.Combine


## Description

पाठ मानों की सूची को एक पाठ मान में श्रृंखलाबद्ध करता है.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

टेक्स्ट मानों, <code>texts</code>, की सूची को एकल टेक्स्ट मान में संयोजित करने के परिणाम को लौटाता है. <code>texts</code> में मौजूद किसी भी <code>null</code> मान की उपेक्षा की जाती है.    अंतिम संयुक्त टेक्स्ट में उपयोग किए गए वैकल्पिक <code>separator</code> को निर्दिष्ट किया जा सकता है.


## Examples

### Example #1 
पाठ मान &#34;Seattle&#34; और &#34;WA&#34; को संयोजित करें.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
कॉमा और रिक्ति से विभाजित टेक्स्ट मान &#34;Seattle&#34; और &#34;WA&#34; को संयोजित करें.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
अल्पविराम और रिक्ति से विभाजित मानों &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; और &#34;WA&#34; को संयोजित करें. (ध्यान दें कि &lt;code&gt;null&lt;/code&gt; की उपेक्षा की गई है.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
