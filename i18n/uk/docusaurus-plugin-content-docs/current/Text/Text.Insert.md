---
title: Text.Insert
---

# Text.Insert


## Description

Вставляє одне текстове значення в інше у вказану позицію.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Повертає результат вставлення текстового значення <code>newText</code> у текстове значення <code>text</code> у позицію <code>offset</code>. Положення починаються з числа 0.


## Examples

### Example #1 
Вставити &#34;C&#34; між &#34;B&#34; і &#34;D&#34; у &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
