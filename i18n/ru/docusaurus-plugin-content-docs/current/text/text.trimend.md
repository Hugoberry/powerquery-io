---
title: Text.TrimEnd
---

# Text.TrimEnd


Удаляет все указанные конечные символы.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Возвращает результат удаления всех конечных символов из указанного `text`. По умолчанию удаляются все конечные символы пробела.

-   `text`: текст, из которого необходимо удалить конечные символы.
-   `trim`: переопределяет символы пробела, которые обрезаются по умолчанию. Этот параметр может быть одиночным символом или списком одиночных символов. Каждая операция обрезки конечных символов останавливается при обнаружении необрезанного символа.


## Examples

### Example #1
Удалить конечные пробелы из " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Удаление конечных нулей из текстового представления заполненного числа с плавающей запятой.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Удаление конечных символов заполнения из имени учетной записи фиксированной ширины.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
