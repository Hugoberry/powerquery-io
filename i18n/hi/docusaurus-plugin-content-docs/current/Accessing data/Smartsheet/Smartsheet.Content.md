---
title: Smartsheet.Content
---

# Smartsheet.Content


एक Smartsheet अनुक्रमणिका समाप्ति बिंदु से डेटा की एक तालिका लौटाता है.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

निर्दिष्ट समाप्ति बिंदु पर Smartsheet 2.0 REST API के लिए कॉल करता है और तालिका में लौटाए गए डेटा तत्व को रूपांतरित करता है.


## Examples

### Example #1 
Smartsheet API से उपयोगकर्ता जानकारी की एक तालिका पुल करता है
```powerquery
Smartsheet.Content("उपयोगकर्ता")
```

Result: 
```powerquery
Smartsheet API द्वारा लौटाई गई उपयोगकर्ता जानकारी वाली एक तालिका
```



