---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Повертає список ідентичностей, що відповідатимуть умові.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Коли вказано <code>identityProvider</code>, <code>condition</code> перетворюється на список ідентичностей, для яких <code>condition</code> повертатиме значення <code>true</code> в усіх контекстах авторизації, де <code>identityProvider</code> виконує роль постачальника ідентичностей. Якщо <code>condition</code> неможливо перетворити на список ідентичностей, повертається помилка (наприклад, якщо <code>condition</code> виносить рішення на основі атрибутів, відмінних від ідентичностей користувача або групи).<br />    Зверніть увагу, що список ідентичностей представляє ідентичності в тому вигляді, який їм надає <code>condition</code>, і ніяка нормалізація (як-от розширення групи) для них не виконується.<br />



## Category
Accessing data
