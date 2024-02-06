---
title: MailChimp.Instance
---

# MailChimp.Instance


MailChimp API समाप्ति बिंदु से अपरिष्कृत प्रतिसाद परिणाम लौटाता है.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

MailChimp API को कॉल करता है और अपरिष्कृत प्रतिसाद लौटाता है.


## Examples

### Example #1 
दिए गए अभियान के लिए reports/click-details MailChimp API समाप्ति बिंदु से अपरिष्कृत डेटा लौटाता है.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
दिए गए अभियान से अपरिष्कृत क्लिक विवरण डेटा.
```



