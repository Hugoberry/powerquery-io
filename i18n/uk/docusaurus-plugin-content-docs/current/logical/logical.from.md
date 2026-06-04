---
title: Logical.From
---

# Logical.From


Створює логічне значення із заданого.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Повертає значення `logical` із заданого значення `value`. Якщо задане значення `value` – `null`, `Logical.From` повертає значення `null`. Якщо задане значення `value` – `logical`, повертається значення `value`. На значення `logical` можуть перетворюватися значення вказаних нижче типів.

-   `text`: значення `logical` із текстового значення, `"true"` або `"false"`. Докладніші відомості див. в `Logical.FromText`.
-   `number`: `false` – якщо `value` дорівнює `0`, `true` – в іншому випадку.

Якщо `value` належить до будь-якого іншого типу, повертається помилка.


## Examples

### Example #1
Перетворити `2` на значення `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
