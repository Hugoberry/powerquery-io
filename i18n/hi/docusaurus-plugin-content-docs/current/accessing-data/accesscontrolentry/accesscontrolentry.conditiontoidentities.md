---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


पहचान सूची लौटाता है कि शर्त स्वीकार की जाएगी.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

निर्दिष्ट `identityProvider` का उपयोग करते हुए, सभी प्राधिकृत संदर्भों में `identityProvider` पहचान प्रदाता के रूप में `condition` को पहचान सूची में परिवर्तित करता है, जिसके लिए `condition` को `सत्य` वापस लौटाना होगा. यदि `condition` को पहचान सूची में परिवर्तित करना संभव नहीं है, तो एक त्रुटि उत्पन्न होगी. उदाहरण के लिए, यदि `condition` निर्णय लेने के लिए उपयोगकर्ता या समूह की पहचान के अलावा अन्य विशेषताओं को शामिल करता है.

ध्यान दें कि पहचान सूची `condition` में दिखाई देने वाली पहचान का प्रतिनिधित्व करती है और उन पर कोई सामान्यीकरण (जैसे समूह विस्तार) नहीं किया जाता है.



## Category
Accessing data
