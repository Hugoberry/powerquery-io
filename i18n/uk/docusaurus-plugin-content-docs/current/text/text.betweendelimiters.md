---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

Повертає частину рядка `text` між указаними роздільниками `startDelimiter`, `endDelimiter`. Додатковий числовий параметр `startIndex` визначає, який екземпляр роздільника `startDelimiter` мається на увазі. Додатковий список `startIndex` визначає, який екземпляр роздільника `startDelimiter` мається на увазі, а також указує напрямок індексування (з початку чи з кінця введеного рядка). Список `endIndex` діє аналогічно, проте індексування відбувається відносно вказаного параметра `startIndex`.


## Examples

### Example #1
Дає змогу отримати частину рядка "111 (222) 333 (444)" між (першою) відкритою дужкою та (першою) після неї закритою дужкою.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Дає змогу отримати частину рядка "111 (222) 333 (444)" між другою відкритою дужкою та першою після неї закритою дужкою.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Дає змогу отримати частину рядка "111 (222) 333 (444)" між другою з кінця відкритою дужкою та другою після неї закритою дужкою.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
