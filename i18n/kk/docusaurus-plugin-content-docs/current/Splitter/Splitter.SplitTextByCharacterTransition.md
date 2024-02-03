---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Таңбаның бір түрінен екіншісіне өтуге сәйкес мәтінді мәтіндер тізіміне бөлетін функцияны қайтарады. \{0} және \{1} параметрлері таңбалар тізімі немесе таңбаны алатын және шын/жалған мәнін қайтаратын функция болуы мүмкін.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Таңбаның бір түрінен екіншісіне өтуге сәйкес мәтінді мәтіндер тізіміне бөлетін функцияны қайтарады. <code>before</code> және <code>after</code> параметрлері таңбалар тізімі немесе таңбаны алатын және шын/жалған мәнін қайтаратын функция болуы мүмкін.


## Examples

### Example #1 
Жоғарғы немесе төменгі регистрлі әріптен кейін цифр келгенде, кірісті бөледі.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
