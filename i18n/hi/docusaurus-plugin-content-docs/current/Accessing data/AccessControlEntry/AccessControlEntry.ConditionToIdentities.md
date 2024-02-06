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

निर्दिष्ट <code>identityProvider</code> का उपयोग करते हुए, सभी प्राधिकृत संदर्भों में <code>identityProvider</code> पहचान प्रदाता के रूप में <code>condition</code> को पहचान सूची में परिवर्तित करता है, जिसके लिए <code>condition</code> को <code>सत्य</code> वापस लौटाना होगा. यदि <code>condition</code> को पहचान सूची में परिवर्तित करना संभव नहीं है, तो एक त्रुटि उत्पन्न होगी. उदाहरण के लिए, यदि <code>condition</code> निर्णय लेने के लिए उपयोगकर्ता या समूह की पहचान के अलावा अन्य विशेषताओं को शामिल करता है.<br />    ध्यान दें कि पहचान सूची <code>condition</code> में दिखाई देने वाली पहचान का प्रतिनिधित्व करती है और उन पर कोई सामान्यीकरण (जैसे समूह विस्तार) नहीं किया जाता है.<br />



## Category
Accessing data
