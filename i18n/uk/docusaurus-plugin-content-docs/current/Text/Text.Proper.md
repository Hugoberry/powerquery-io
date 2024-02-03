---
title: Text.Proper
---

# Text.Proper


## Description

Перетворює першу букву кожного слова на велику.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Повертає результат перетворення перших букв кожного слова на великі в текстовому значенні параметра <code>text</code>. Усі інші букви повертаються в нижній регістр. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Використовуйте &lt;code&gt;Text.Proper&lt;/code&gt; для простих речень.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
