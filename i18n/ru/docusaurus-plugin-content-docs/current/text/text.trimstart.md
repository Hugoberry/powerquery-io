---
title: Text.TrimStart
---

# Text.TrimStart


Удаляет все указанные начальные символы.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Возвращает результат удаления всех начальных символов из указанного `text`. По умолчанию удаляются все начальные символы пробела.

-   `text`: текст, из которого необходимо удалить начальные символы.
-   `trim`: переопределяет символы пробела, которые обрезаются по умолчанию. Этот параметр может быть одиночным символом или списком одиночных символов. Каждая операция обрезки начальных символов останавливается при обнаружении необрезанного символа.


## Examples

### Example #1
Удалить начальные пробелы из " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Удаление начальных нулей из текстового представления числа.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Удаление начальных символов заполнения из имени учетной записи фиксированной ширины.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
