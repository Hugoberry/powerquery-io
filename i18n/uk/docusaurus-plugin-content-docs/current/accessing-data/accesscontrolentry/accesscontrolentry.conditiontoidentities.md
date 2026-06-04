---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Повертає список ідентичностей, що відповідатимуть умові.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Коли вказано `identityProvider`, `condition` перетворюється на список ідентичностей, для яких `condition` повертатиме значення `true` в усіх контекстах авторизації, де `identityProvider` виконує роль постачальника ідентичностей. Якщо `condition` неможливо перетворити на список ідентичностей, повертається помилка (наприклад, якщо `condition` виносить рішення на основі атрибутів, відмінних від ідентичностей користувача або групи).

Зверніть увагу, що список ідентичностей представляє ідентичності в тому вигляді, який їм надає `condition`, і ніяка нормалізація (як-от розширення групи) для них не виконується.



## Category
Accessing data
