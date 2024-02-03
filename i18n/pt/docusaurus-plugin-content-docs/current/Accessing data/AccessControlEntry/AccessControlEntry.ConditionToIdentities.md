---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Returns a list of identities that the condition will accept.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Using the specified <code>identityProvider</code>, converts the <code>condition</code> into the list of identities for which <code>condition</code> would return <code>true</code> in all authorization contexts with <code>identityProvider</code> as the identity provider. An error is raised if it is not possible to convert <code>condition</code> into a list of identities, for example if <code>condition</code> consults attributes other than user or group identities to make a decision.<br />    Note that the list of identities represents the identities as they appear in <code>condition</code> and no normalization (such as group expansion) is performed on them.<br />



## Category
Accessing data
