---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

1 से 54 तक संख्या लौटाता है जो यह इंगित करती है कि यह दिनांक वर्ष के किस सप्ताह में आता है.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

1 से 54 तक की कोई संख्या लौटाता है, जो इंगित करती है कि दिनांक, <code>dateTime</code>, वर्ष के किस सप्ताह में आता है. <ul>        <li><code>dateTime</code>: एक<code>तिथिसमय</code>मान, जिसके लिए वर्ष-का-सप्ताह निर्धारित किया जाता है.</li>        <li><code>firstDayOfWeek</code>:एक वैकल्पिक <code>दिन.प्रकार</code>मान, जो इंगित करता है कि एक नए सप्ताह के प्रारंभ के लिए किस दिन पर विचार किया जाता है (उदाहरण के लिए, <code>Day.Sunday</code>). यदि अनिर्दिष्ट है, तो एक कल्चर-निर्भर डिफ़ॉल्ट का उपयोग किया जाता है.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि वर्ष के किस सप्ताह में 27 मार्च, 2011 शामिल है.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
सोमवार को सप्ताह के प्रारंभ के रूप में उपयोग करके निर्धारित करें कि वर्ष के किस सप्ताह में 27 मार्च, 2011 शामिल है.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
