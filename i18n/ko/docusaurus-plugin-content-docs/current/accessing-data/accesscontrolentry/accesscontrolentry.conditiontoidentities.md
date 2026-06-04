---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


조건에 따라 허용되는 ID 목록을 반환합니다.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

지정한 `identityProvider`을(를) 사용하여 `condition`을(를) ID 목록으로 변환합니다. 이 경우 `condition`은(는) ID 공급자가 `identityProvider`인 모든 권한 부여 컨텍스트에서 `true`를 반환합니다. `condition`이(가) 사용자 또는 그룹 ID 이외의 특성을 참조하여 의사결정을 내리는 경우처럼 `condition`을(를) ID 목록으로 변환할 수 없으면 오류가 발생합니다.

ID 목록이 ID를 나타내는 이유는 `condition`에 나타나고 목록에 대해 정규화(예: 그룹 확장)가 수행되지 않기 때문입니다.



## Category
Accessing data
