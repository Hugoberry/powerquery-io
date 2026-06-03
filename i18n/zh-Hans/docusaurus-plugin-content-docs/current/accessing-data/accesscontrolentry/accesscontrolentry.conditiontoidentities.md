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

使用指定的 `identityProvider`，在 `identityProvider` 作为标识提供者的情况下，将 `condition` 转换为标识的列表，其中 `condition` 将在所有授权上下文中返回 `true`。如果无法将 `condition` 转换为标识列表，则会引发错误，例如，如果 `condition` 查询用户或组标识以外的属性以做出决策。

请注意，标识列表表示 `condition` 中显示的标识，并且不对其执行任何规范化操作(如组扩展)。



## Category
Accessing data
