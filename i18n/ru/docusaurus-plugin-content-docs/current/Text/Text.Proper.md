---
title: Text.Proper
---

# Text.Proper


## Description

Переводит первую букву каждого слова в верхний регистр.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Возвращает результат перевода в верхний регистр только первой буквы каждого слова в текстовом значении <code>text</code>. Все остальные буквы возвращаются в нижнем регистре. Также может быть указан необязательный параметр <code>culture</code> (например, "ru-RU").


## Examples

### Example #1 
Использовать &lt;code&gt;Text.Proper&lt;/code&gt; для простого предложения.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
