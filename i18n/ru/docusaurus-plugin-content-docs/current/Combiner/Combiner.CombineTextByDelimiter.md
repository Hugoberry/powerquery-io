---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Возвращает функцию, которая объединяет список текстовых значений с помощью заданного разделителя.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Возвращает функцию, которая объединяет список текстовых значений в одно текстовое значение с помощью заданного разделителя.


## Examples

### Example #1 
Объедините список текстовых значений с помощью точки запятой в качестве разделителя.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Объединение текста двух столбцов с помощью разделителя-запятой и цитирования в стиле CSV.
```powerquery
let
    Source = #table(
        type table [Column1 = text, Column2 = text],
        {{"a", "b"}, {"c", "d,e,f"}}
    ),
    Merged = Table.CombineColumns(
        Source,
        {"Column1", "Column2"},
        Combiner.CombineTextByDelimiter(",", QuoteStyle.Csv),
        "Merged"
    )
in
    Merged
```

Result: 
```powerquery
#table(
    type table [Merged = text],
    {{"a,b"}, {"c,""d,e,f"""}}
)
```




## Category
Combiner
