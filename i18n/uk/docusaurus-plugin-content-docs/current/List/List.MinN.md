---
title: List.MinN
---

# List.MinN


## Description

Повертає мінімальні значення в списку. Можна вказати кількість значень, які необхідно повернути, або умову фільтрування.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Повертає мінімальні значення списку за параметром <code>list</code>.    За допомогою параметра <code>countOrCondition</code> визначається кількість значень, що слід повернути, або умова фільтрування. Додатковий параметр <code>comparisonCriteria</code> дає змогу вказати, як порівнювати значення в списку. <ul>        <li><code>list</code> – список значень.</li>        <li><code>countOrCondition</code> – якщо задано число, повертає список з упорядкованими за зростанням елементами, кількість яких визначається за параметром <code>countOrCondition</code>; якщо вказано умову, повертає список елементів, які початково відповідають цій умові. Якщо елемент не відповідає умові, наступні елементи не розглядаються. Якщо цей параметр має Null-значення, повертається одне найменше значення в списку.</li><li><code>comparisonCriteria</code> <i>[необов’язковий]</i> – можна задати додаткове значення <code>comparisonCriteria</code>, щоб визначити, як порівнювати елементи в списку. Якщо цей параметр має Null-значення, використовується стандартний засіб порівняння.</li></ul>


## Examples

### Example #1 
Знайти 5 найменших значень у списку &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
