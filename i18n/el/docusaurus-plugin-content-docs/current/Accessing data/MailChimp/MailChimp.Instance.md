---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Επιστρέφει ανεπεξέργαστα αποτελέσματα απόκρισης από ένα τελικό σημείο MailChimp API.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Πραγματοποιεί μια κλήση στο MailChimp API και επιστρέφει την ανεπεξέργαστη απόκριση.


## Examples

### Example #1 
Επιστρέφει ανεπεξέργαστα δεδομένα από το τελικό σημείο MailChimp API reports/click-details για μια συγκεκριμένη εκστρατεία.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Ανεπεξέργαστα δεδομένα λεπτομερειών κλικ από τη δεδομένη εκστρατεία.
```



