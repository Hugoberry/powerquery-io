---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Повертає функцію засобу порівняння, яка порівнює значення за правилами для порядкових значень.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Повертає функцію засобу порівняння, яка використовує порядкові правила для порівняння наданих значень "<code>x</code>" і "<code>y</code>".<br />      <br />      Функція засобу порівняння приймає два аргументи та повертає -1, 0 або 1 залежно від того, чи перше значення менше, дорівнює або більше за друге.    


## Examples

### Example #1 
За допомогою правил для порядкових значень порівняйте, чи значення &#34;encyclopædia&#34; та &#34;encyclopaedia&#34; еквівалентні. Зверніть увагу, що вони еквівалентні, якщо використовується функція &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
