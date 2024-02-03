---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Повертає функцію, яка об’єднує список тексту за допомогою вказаного роздільника.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Повертає функцію, яка об’єднує список текстових значень в одне текстове значення за допомогою вказаного роздільника.


## Examples

### Example #1 
Об’єднати список текстових значень за допомогою крапки з комою як роздільника.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Об’єднайте текст двох стовпців, використовуючи роздільник із комами й лапки в стилі CSV.
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
