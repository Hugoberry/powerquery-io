---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Повертає частину рядка `text` після вказаного роздільника `delimiter`. Додатковий числовий параметр `index` визначає, який екземпляр роздільника `delimiter` мається на увазі. Додатковий список `index` визначає, який екземпляр роздільника `delimiter` мається на увазі, а також указує напрямок індексування (з початку чи з кінця введеного рядка).


## Examples

### Example #1
Дає змогу отримати частину рядка "111-222-333" після (першого) дефіса.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
Дає змогу отримати частину рядка "111-222-333" після другого дефіса.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
Дає змогу отримати частину рядка "111-222-333" після другого з кінця дефіса.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
