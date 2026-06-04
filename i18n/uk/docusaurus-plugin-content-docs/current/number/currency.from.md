---
title: Currency.From
---

# Currency.From


Повертає значення грошової одиниці із заданого значення.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Повертає значення `currency` із заданого параметра `value`. Якщо заданий параметр `value` має `null`\-значення, функція `Currency.From` повертає `null`. Якщо заданий параметр `value` має значення `number` та перебуває в діапазоні грошової одиниці, дробова частина параметра `value` повертається округленою до 4 десяткових знаків. Якщо заданий параметр `value` має інше значення, за допомогою функції `Number.FromText`, його буде перетворено на значення типу `number`. Припустимий діапазон значень грошової одиниці: від `-922 337 203 685 477,5808` до `922 337 203 685 477,5807`. Див. опис функції `Number.Round`, щоб дізнатися про доступні режими округлення. За замовчуванням використовується режим `RoundingMode.ToEven`. Крім того, можна вказати необов’язковий параметр `culture` (наприклад, "uk-UA").


## Examples

### Example #1
Отримати значення `currency` з `"1,23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Отримання значення типу `currency` з числа `"1,23455"` за допомогою режиму `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
