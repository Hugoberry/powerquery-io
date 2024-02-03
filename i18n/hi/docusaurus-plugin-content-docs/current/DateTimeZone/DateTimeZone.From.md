---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

दिए गए मान से एक datetimezone बनाता है.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

दिए गए <code>value</code> से एक <code>datetimezone</code> मान वापस करता है. एक वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").यदि दिया गया <code>value</code> <code>नल</code> है, तो <code>DateTimeZone.From</code> <code>नल</code> वापस करता है. यदि दिया गया <code>value</code> <code>datetimezone</code> है, तो <code>value</code> लौटाया जाता है. निम्न प्रकार के मानों को एक <code>datetimezone</code> मान में रूपांतरित किया जा सकता है:      <ul>        <li><code>पाठ</code>: पाठ प्रस्तुतिकरण से एक <code>datetimezone</code> मान. विवरण के लिए <code>DateTimeZone.FromText</code> देखें.</li>        <li><code>तिथि</code>: तिथि घटक के रूप में <code>value</code>, समय घटक के रूप में <code>12:00:00 AM</code> और स्थानीय समय क्षेत्र के संगत ऑफ़सेट वाला <code>datetimezone</code>. </li>        <li><code> तिथिसमय </code>: तिथिसमय के रूप में <code>value</code> और स्थानीय समय क्षेत्र के संगत ऑफ़सेट वाला <code>datetimezone</code>.</li>        <li><code>समय</code>: तिथि घटक के रूप में <code>0</code>, समय घटक के रूप में <code>value</code> और स्थानीय समय क्षेत्र के संगत ऑफ़सेट के OLE स्वचालन तिथि के समतुल्य तिथि वाला <code>datetimezone</code>. </li>        <li><code>संख्या</code>: <code>value</code> द्वारा व्यक्त OLE स्वचालन तिथि के समतुल्य तिथिसमय और स्थानीय समय क्षेत्र के संगत ऑफ़सेट वाला <code>datetimezone</code>.</li>      </ul>यदि <code>value</code> किसी भी अन्य प्रकार का है, तो एक त्रुटि लौटाई जाती है.


## Examples

### Example #1 
&lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; को एक &lt;code&gt;datetimezone&lt;/code&gt; मान में रूपांतरित करें.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
