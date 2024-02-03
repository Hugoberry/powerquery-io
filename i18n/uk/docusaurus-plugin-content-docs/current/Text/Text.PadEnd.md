---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Повертає текст зазначеної довжини шляхом заповнення кінцевої частини даного тексту.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Повертає значення <code>text</code>, заповнене до довжини <code>count</code> вставленням пробілів у кінці текстового значення <code>text</code>.    Для заповнення можна зазначити додатковий символ <code>character</code>. За замовчуванням для цього використовується пробіл.


## Examples

### Example #1 
Заповнити кінець текстового значення до довжини в 10 символів.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
Заповнити кінець текстового значення символами &#34;|&#34; до довжини в 10 символів.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
