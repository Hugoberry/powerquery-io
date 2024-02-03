---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

अपने नामांकन से संबंधित Azure Enterprise REST API समाप्ति बिंदु का URL दर्ज करें


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Azure Enterprise API से उपलब्ध रिपोर्ट और महिनों की सूची लौटाता है


## Examples

### Example #1 
परिणाम प्राप्त करने के लिए AzureEnterprise.Tables फ़ंक्शन का उपयोग करके किसी विशिष्ट मान तक नेविगेट करें.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
तालिका
```



