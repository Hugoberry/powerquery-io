---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Повертає частину рядка <code>text</code> перед указаним роздільником <code>delimiter</code>.    Додатковий числовий параметр <code>index</code> визначає, який екземпляр роздільника <code>delimiter</code> мається на увазі.    Додатковий список <code>index</code> визначає, який екземпляр роздільника <code>delimiter</code> мається на увазі, а також указує напрямок індексування (з початку чи з кінця введеного рядка).


## Examples

### Example #1 
Дає змогу отримати частину рядка &#34;111-222-333&#34; перед (першим) дефісом.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Дає змогу отримати частину рядка &#34;111-222-333&#34; перед другим дефісом.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Дає змогу отримати частину рядка &#34;111-222-333&#34; перед другим із кінця дефісом.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
