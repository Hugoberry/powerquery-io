---
title: List.Median
---

# List.Median


## Description

Повертає серединне значення у списку.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Повертає медіанний елемент списку <code>list</code>. Ця функція повертає <code>null</code>, якщо список не містить значень, відмінних від <code>null</code>-значення.    Для парної кількості елементів функція вибирає менший із двох серединних елементів. Якщо ж список    складається тільки зі значень "Дата й час", "Тривалість", "Число" або "Час", функція повертає середнє двох елементів.


## Examples

### Example #1 
Знайти серединний елемент списку &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
