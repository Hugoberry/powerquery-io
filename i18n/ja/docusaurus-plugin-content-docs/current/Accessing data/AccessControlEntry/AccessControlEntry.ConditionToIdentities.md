---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

条件が受け付ける ID の一覧を返します。


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

指定した <code>identityProvider</code> を使用すると、<code>condition</code> が ID の一覧に変換されます。この一覧で <code>condition</code> は、<code>identityProvider</code> を ID プロバイダーとするすべての承認コンテキストで <code>true</code> を返します。<code>condition</code> が決定を下すためにユーザー ID やグループ ID 以外の属性を参照するなど、<code>condition</code> を ID の一覧に変換することができない場合はエラーが発生します。<br />    ID の一覧が <code>condition</code> に使用される ID を表しており、その ID の一覧に対して正規化 (グループ拡張など) が実行されていないことに注意してください。<br />



## Category
Accessing data
