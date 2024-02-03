---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Повертає функцію, яка розділяє текст на список тексту відповідно до переходу від одного до іншого різновиду символів. Параметри \{0}, \{1} можна вказати як список символів або функцію, яка приймає символ і повертає значення true чи false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Повертає функцію, яка розділяє текст на список тексту відповідно до переходу від одного до іншого різновиду символів. Параметри <code>before</code>, <code>after</code> можна вказати як список символів або функцію, яка приймає символ і повертає значення true чи false.


## Examples

### Example #1 
Розділення вхідних даних щоразу, коли після букви верхнього або нижнього регістра йде цифра.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
