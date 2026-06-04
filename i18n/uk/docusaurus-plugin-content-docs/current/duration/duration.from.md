---
title: Duration.From
---

# Duration.From


Створює тривалість із заданого значення.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Повертає значення тривалості із заданого значення.

-   `value`: значення, від якого отримується тривалість. Якщо задане значення `value` – `null`, ця функція повертає `null`. Якщо задане значення `value` – `duration`, повертається `value`. Значення таких типів можна перетворити на значення `duration`:
    -   `text`: значення `duration` із текстових форм часу, що минув (d.h:m:s). Див. `Duration.FromText` для докладніших відомостей.
    -   `number`: значення `duration`, еквівалентне кількості цілих і дробових днів, виражених у `value`.

Якщо "`value`" є будь-якого іншого типу, повертається помилка.


## Examples

### Example #1
Перетворити `2.525` на значення `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Перетворити текстове значення `"2.05:55:20.34567"` на значення `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
