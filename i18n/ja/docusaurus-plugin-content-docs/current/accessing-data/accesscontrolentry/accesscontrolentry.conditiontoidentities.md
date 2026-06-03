---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


条件が受け付ける ID の一覧を返します。


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

指定した `identityProvider` を使用すると、`condition` が ID の一覧に変換されます。この一覧で `condition` は、`identityProvider` を ID プロバイダーとするすべての承認コンテキストで `true` を返します。`condition` が決定を下すためにユーザー ID やグループ ID 以外の属性を参照するなど、`condition` を ID の一覧に変換することができない場合はエラーが発生します。

ID の一覧が `condition` に使用される ID を表しており、その ID の一覧に対して正規化 (グループ拡張など) が実行されていないことに注意してください。



## Category
Accessing data
