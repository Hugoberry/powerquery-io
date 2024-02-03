---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

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


## Details

Повертає частину рядка <code>text</code> між указаними роздільниками <code>startDelimiter</code>, <code>endDelimiter</code>.    Додатковий числовий параметр <code>startIndex</code> визначає, який екземпляр роздільника <code>startDelimiter</code> мається на увазі.    Додатковий список <code>startIndex</code> визначає, який екземпляр роздільника <code>startDelimiter</code> мається на увазі, а також указує напрямок індексування (з початку чи з кінця введеного рядка).    Список <code>endIndex</code> діє аналогічно, проте індексування відбувається відносно вказаного параметра <code>startIndex</code>.


## Examples

### Example #1 
Дає змогу отримати частину рядка &#34;111 (222) 333 (444)&#34; між (першою) відкритою дужкою та (першою) після неї закритою дужкою.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Дає змогу отримати частину рядка &#34;111 (222) 333 (444)&#34; між другою відкритою дужкою та першою після неї закритою дужкою.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Дає змогу отримати частину рядка &#34;111 (222) 333 (444)&#34; між другою з кінця відкритою дужкою та другою після неї закритою дужкою.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
