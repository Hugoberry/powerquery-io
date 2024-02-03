---
title: List.MaxN
---

# List.MaxN


## Description

Повертає максимальні значення в списку. Необхідно вказати кількість значень, які необхідно повернути, або умову фільтрування.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Повертає максимальні значення в списку за параметром <code>list</code>.    Після сортування рядків можна вказувати додаткові параметри для подальшого фільтрування результату. Додатковий параметр <code>countOrCondition</code> дає змогу задати кількість значень, що слід повернути, або умову фільтрування. За допомогою додаткового параметра <code>comparisonCriteria</code> визначається, як порівнювати значення в списку. <ul>        <li><code>list</code> – список значень.</li>        <li><code>countOrCondition</code> – якщо задано число, повертає список з упорядкованими за зростанням елементами, кількість яких визначається за параметром <code>countOrCondition</code>; якщо вказано умову, повертає список елементів, які початково відповідають цій умові. Якщо елемент не відповідає умові, наступні елементи не розглядаються.</li><li><code>comparisonCriteria</code> <i>[необов’язковий]</i> – можна задати додаткове значення <code>comparisonCriteria</code>, щоб визначити, як порівнювати елементи в списку. Якщо цей параметр має Null-значення, використовується стандартний засіб порівняння.</li></ul>



## Category
List.Ordering