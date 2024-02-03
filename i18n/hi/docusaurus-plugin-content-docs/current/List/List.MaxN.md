---
title: List.MaxN
---

# List.MaxN


## Description

सूची के अधिकतम मान लौटाता है. लौटाए जाने वाले मानों की संख्या या फ़िल्टर करने की शर्त को निर्दिष्ट किया जाना चाहिए.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

सूची <code>list</code> के अधिकतम मान(मानों) को लौटाता है.      पंक्तियों को सॉर्ट करने के बाद परिणाम को आगे फ़िल्टर करने के लिए वैकल्पिक पैरामीटर निर्दिष्ट किए जा सकते हैं. वैकल्पिक पैरामीटर <code>countOrCondition</code> लौटाए जाने वाले मानों की संख्या या फ़िल्टर करने की शर्त निर्दिष्ट करता है. वैकल्पिक पैरामीटर <code>comparisonCriteria</code> निर्दिष्ट करता है कि सूची के मानों की तुलना कैसे करनी है. <ul>        <li> <code>list</code>: मानों की सूची.</li>        <li> <code>countOrCondition</code>:  यदि कोई संख्या निर्दिष्ट है, तो <code>countOrCondition</code> आइटमों तक की सूची आरोही क्रम में लौटाई जाती है. यदि कोई शर्त निर्दिष्ट है, तो प्रारंभिक रूप से शर्त को पूरा करने वाले आइटमों की सूची को लौटाया जाता है. एक बार आइटम द्वारा शर्त को पूरा न करने पर, आगे किसी भी आइटम पर विचार नहीं किया जाता है.</li><li><code>comparisonCriteria</code>: <i>[वैकल्पिक]</i> यह निर्धारित करने के लिए एक वैकल्पिक <code>comparisonCriteria</code> मान निर्दिष्ट किया जा सकता है कि सूची के आइटमों की तुलना कैसे करनी है. यदि यह पैरामीटर नल है, तो डिफ़ॉल्ट तुलनाकर्ता का उपयोग किया जाता है </li></ul>



## Category
List.Ordering
