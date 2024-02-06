---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


Возвращает функцию, которая разделяет текст по спискам в соответствии с переходом одного типа символа в другой. Параметры \{0} и \{1} могут быть списком символов или функцией, которая принимает символ и возвращает значение True или False.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

Возвращает функцию, которая разделяет текст по спискам в соответствии с переходом одного типа символа в другой. Параметры <code>before</code> и <code>after</code> могут быть списком символов или функцией, которая принимает символ и возвращает значение True или False.


## Examples

### Example #1 
Разделение входных данных, когда за прописной или строчной буквой следует цифра.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
