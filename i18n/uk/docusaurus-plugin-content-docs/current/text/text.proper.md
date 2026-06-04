---
title: Text.Proper
---

# Text.Proper


Перетворює першу букву кожного слова на велику.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Повертає результат перетворення перших букв кожного слова на великі в текстовому значенні параметра `text`. Усі інші букви повертаються в нижній регістр. Крім того, можна вказати необов’язковий параметр `culture` (наприклад, "uk-UA").


## Examples

### Example #1
Використовуйте `Text.Proper` для простих речень.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
