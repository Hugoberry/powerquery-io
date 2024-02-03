---
title: Stripe.Contents
---

# Stripe.Contents


## Description

API को किए गए कॉल की संख्या सीमित करने के विकल्प के साथ, Stripe API को कॉल करता है.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

https://api.stripe.com/v1/<code>method</code> पर वैकल्पिक रिकॉर्ड <code>query</code> के अतिरिक्त पैरामीटर और वैकल्पिक <code>pageLimit</code> के API अनुरोधों की संख्या सीमा के रूप में पास होने के साथ Stripe API को कॉल करता है. सर्वाधिक नवीन डेटा पहले लौटाया जाता है. यदि <code>pageLimit</code> निर्दिष्ट नहीं किया गया है, तो सभी डेटा लौटा दिया जाता है. Stripe संस्करण 2015-10-16 का उपयोग किया गया है.


## Examples

### Example #1 
सभी शुल्क डेटा लौटाता है
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
वर्तमान Stripe खाते के लिए सभी शुल्क डेटा वाली एक तालिका
```


### Example #2 
शुल्क डेटा का एक पृष्ठ लौटाता है
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
वर्तमान Stripe खाते के लिए नवीनतम शुल्क डेटा वाली एक तालिका
```



