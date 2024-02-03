---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Повертає частину рядка <code>text</code> після вказаного роздільника <code>delimiter</code>.    Додатковий числовий параметр <code>index</code> визначає, який екземпляр роздільника <code>delimiter</code> мається на увазі.    Додатковий список <code>index</code> визначає, який екземпляр роздільника <code>delimiter</code> мається на увазі, а також указує напрямок індексування (з початку чи з кінця введеного рядка).


## Examples

### Example #1 
Дає змогу отримати частину рядка &#34;111-222-333&#34; після (першого) дефіса.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Дає змогу отримати частину рядка &#34;111-222-333&#34; після другого дефіса.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Дає змогу отримати частину рядка &#34;111-222-333&#34; після другого з кінця дефіса.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
