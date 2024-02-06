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

Используя указанное значение <code>identityProvider</code>, преобразует <code>condition</code> в список удостоверений, для которых <code>condition</code> может вернуть значение <code>true</code> (истина) во всех контекстах авторизации с <code>identityProvider</code> в качестве поставщика удостоверений. Если преобразовать <code>condition</code> в список удостоверений невозможно (например, если для вынесения решения <code>condition</code> рассматривает атрибуты, отличные от удостоверений пользователей или групп), возникает ошибка.<br />    Обратите внимание, что удостоверения в списке представлены в том же виде, что и в <code>condition</code>, и к ним не применяется нормализация (например, расширение групп).<br />



## Category
Accessing data
