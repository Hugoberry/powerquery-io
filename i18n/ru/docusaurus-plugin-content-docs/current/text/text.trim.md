---
title: Text.Trim
---

# Text.Trim


Удаляет все указанные начальные и конечные символы.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Возвращает результат удаления всех начальных и конечных символов из указанного `text`. По умолчанию удаляются все начальные и конечные символы пробела.

-   `text`: текст, из которого необходимо удалить начальные и конечные символы.
-   `trim`: переопределяет символы пробела, которые обрезаются по умолчанию. Этот параметр может быть одиночным символом или списком одиночных символов. Каждая операция обрезки начальных и конечных символов останавливается при обнаружении необрезанного символа.


## Examples

### Example #1
Удалить начальные и конечные пробелы из " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Удаление начальных и конечных нулей из текстового представления числа.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Удаление начальных и конечных скобок из HTML-тега.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Удаление специальных символов, используемые вокруг состояния ожидающих продаж.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
