---
title: List.MinN
---

# List.MinN


## Description

सूची के न्यूनतम मान लौटाता है. लौटाए जाने वाले मानों की संख्या या फ़िल्टर करने की शर्त को निर्दिष्ट किया जा सकता है.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

सूची <code>list</code> के न्यूनतम मान(मानों) को लौटाता है.      पैरामीटर <code>countOrCondition</code> लौटाए जाने वाले मानों की संख्या या फ़िल्टर करने की शर्त निर्दिष्ट करता है. वैकल्पिक पैरामीटर <code>comparisonCriteria</code> निर्दिष्ट करता है कि सूची के मानों की तुलना कैसे करनी है. <ul>        <li> <code>list</code>: मानों की सूची.</li>        <li> <code>countOrCondition</code>:  यदि कोई संख्या निर्दिष्ट हो, तो <code>countOrCondition</code> आइटम तक की सूची आरोही क्रम में लौटाई जाती है. यदि कोई शर्त निर्दिष्ट हो, तो प्रारंभिक रूप से शर्त को पूरा करने वाले आइटम की सूची को लौटाया जाता है. एक बार आइटम द्वारा शर्त को पूरा न करने पर, आगे किसी भी आइटम पर विचार नहीं किया जाता है. यदि यह पैरामीटर नल है, तो सूची का सबसे छोटा एकल मान लौटाया जाता है.</li><li><code>comparisonCriteria</code>: <i>[वैकल्पिक]</i> यह निर्धारित करने के लिए एक वैकल्पिक <code>comparisonCriteria</code> मान निर्दिष्ट किया जा सकता है कि सूची के आइटमों की तुलना कैसे करनी है. यदि यह पैरामीटर नल है, तो डिफ़ॉल्ट तुलनाकर्ता का उपयोग किया जाता है. </li></ul>


## Examples

### Example #1 
सूची &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt; के 5 सबसे छोटे मान प्राप्त करें.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
