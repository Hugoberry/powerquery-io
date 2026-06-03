---
title: Currency.From
---

# Currency.From


Возвращает значение валюты для заданного значения.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Возвращает значение `currency`, полученное из предоставленного значения `value`. Если данное `value` равно `NULL`, то `Currency.From` возвращает `NULL`. Если данное `value` представляет собой `number` в пределах диапазона currency, то возвращается `value` с округлением до четвертого знака дробной части. Если `value` имеет какой-либо другой тип, то значение сначала преобразуется в `number` с помощью `Number.FromText`. Допустимый диапазон для currency: от `-922,337,203,685,477.5808` до `922,337,203,685,477.5807`. Доступные режимы округления см. в описании `Number.Round`. По умолчанию используется `RoundingMode.ToEven`. При необходимости можно также указать `culture` (например, "ru-RU").


## Examples

### Example #1
Получить значение `валюты` из значения `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Получим значение `currency` для `"1,23455"`, используя `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
