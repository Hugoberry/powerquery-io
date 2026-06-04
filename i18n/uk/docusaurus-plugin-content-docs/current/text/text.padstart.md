---
title: Text.PadStart
---

# Text.PadStart


Повертає текст зазначеної довжини шляхом заповнення початкової частини даного тексту.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Повертає значення `text`, заповнене до довжини `count` вставленням пробілів на початку текстового значення `text`. Для заповнення можна зазначити додатковий символ `character`. За замовчуванням для цього використовується пробіл.


## Examples

### Example #1
Заповнити початок текстового значення до довжини в 10 символів.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Заповнити початок текстового значення символами "|" до довжини в 10 символів.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
