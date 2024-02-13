---
title: MailChimp.Instance
---

# MailChimp.Instance


Returns raw response results from a MailChimp API endpoint.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Makes a call to the MailChimp API and returns the raw response.


## Examples

### Example #1 
Returns raw data from the reports/click-details MailChimp API endpoint for a given campaign.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Raw click details data from the given campaign.
```



