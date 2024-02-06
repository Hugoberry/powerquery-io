---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


返回条件将接受的标识的列表。


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

使用指定的 <code>identityProvider</code>，在 <code>identityProvider</code> 作为标识提供者的情况下，将 <code>condition</code> 转换为标识的列表，其中 <code>condition</code> 将在所有授权上下文中返回 <code>true</code>。如果无法将 <code>condition</code> 转换为标识列表，则会引发错误，例如，如果 <code>condition</code> 查询用户或组标识以外的属性以做出决策。<br />    请注意，标识列表表示 <code>condition</code> 中显示的标识，并且不对其执行任何规范化操作(如组扩展)。<br />



## Category
Accessing data
