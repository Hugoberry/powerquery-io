---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Повертає функцію засобу порівняння без урахування регістра, яка порівнює значення за порядковими правилами.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Повертає функцію засобу порівняння без урахування регістра, яка використовує порядкові правила для порівняння наданих значень "<code>x</code>" і "<code>y</code>".<br />        <br />        Функція засобу порівняння приймає два аргументи та повертає -1, 0 або 1 залежно від того, чи перше значення менше, дорівнює або більше за друге    


## Examples

### Example #1 
За порядковими правилами без урахування регістра порівняти значення &#34;Abc&#34; та &#34;abc&#34;. Зверніть увагу, що за використання функції &lt;code&gt;Comparer.Ordinal&lt;/code&gt; значення &#34;Abc&#34; менше за &#34;abc&#34;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
