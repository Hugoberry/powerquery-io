---
title: Text.PadEnd
---

# Text.PadEnd


Повертає текст зазначеної довжини шляхом заповнення кінцевої частини даного тексту.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Повертає значення `text`, заповнене до довжини `count` вставленням пробілів у кінці текстового значення `text`. Для заповнення можна зазначити додатковий символ `character`. За замовчуванням для цього використовується пробіл.


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
Заповнити кінець текстового значення символами "|" до довжини в 10 символів.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
