---
title: Stripe.Method
---

# Stripe.Method


## Description

Stripe API को कॉल करता है.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

https://api.stripe.com/v1/<code>method</code> पर रिकॉर्ड <code>additionalParameters</code> के अतिरिक्त पैरामीटर के रूप में पास होने और अपेक्षित नामों की सूची <code>ColumnNames</code> के साथ Stripe API को कॉल करता है. Stripe संस्करण 2015-10-16 का उपयोग किया गया है.


## Examples

### Example #1 
1 नवंबर 2015 के बाद निर्मित की गई ईवेंट वाली तालिका प्रदान करता है.
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
वर्तमान Stripe खाते के लिए निर्दिष्ट ईवेंट वाली एक तालिका
```


### Example #2 
सभी SKU वाली एक तालिका लौटाता है
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
वर्तमान Stripe खाते के लिए सभी SKU वाली एक तालिका
```



