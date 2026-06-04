---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Повертає частину рядка `text` перед указаним роздільником `delimiter`. Додатковий числовий параметр `index` визначає, який екземпляр роздільника `delimiter` мається на увазі. Додатковий список `index` визначає, який екземпляр роздільника `delimiter` мається на увазі, а також указує напрямок індексування (з початку чи з кінця введеного рядка).


## Examples

### Example #1
Дає змогу отримати частину рядка "111-222-333" перед (першим) дефісом.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Дає змогу отримати частину рядка "111-222-333" перед другим дефісом.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Дає змогу отримати частину рядка "111-222-333" перед другим із кінця дефісом.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
