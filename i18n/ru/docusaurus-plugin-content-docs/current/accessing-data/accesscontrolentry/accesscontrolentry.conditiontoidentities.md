---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Возвращает список удостоверений, которые будут приняты условием.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Используя указанное значение `identityProvider`, преобразует `condition` в список удостоверений, для которых `condition` может вернуть значение `true` (истина) во всех контекстах авторизации с `identityProvider` в качестве поставщика удостоверений. Если преобразовать `condition` в список удостоверений невозможно (например, если для вынесения решения `condition` рассматривает атрибуты, отличные от удостоверений пользователей или групп), возникает ошибка.

Обратите внимание, что удостоверения в списке представлены в том же виде, что и в `condition`, и к ним не применяется нормализация (например, расширение групп).



## Category
Accessing data
