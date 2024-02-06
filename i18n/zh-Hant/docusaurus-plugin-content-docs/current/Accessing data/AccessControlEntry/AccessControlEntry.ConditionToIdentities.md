---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


傳回條件會接受的身分識別清單。


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

使用指定的 <code>identityProvider</code>，將 <code>condition</code> 轉換成身分識別清單。在識別提供者為 <code>identityProvider</code> 的情況下，<code>condition</code> 在所有授權內容中皆會針對這些身分識別傳回 <code>true</code>。如果無法將 <code>condition</code> 轉換為身分識別清單，就會引發錯誤。例如，<code>condition</code> 是查閱屬性來做出決定，而不是查閱使用者或群組身分識別。<br />    請注意，身分識別清單代表的是以 <code>condition</code> 顯示，而且未經過正規化 (例如群組擴充) 的身分識別。<br />



## Category
Accessing data
