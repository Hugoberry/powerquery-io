---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


Belirtilen sınırlayıcıyı kullanarak bir metin listesini birleştiren bir işlev döndürür.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Bir metin değerleri listesini belirtilen sınırlayıcıyı kullanarak tek bir metin değerine dönüştüren bir işlev döndürür.


## Examples

### Example #1 
Metin değerleri listesini noktalı virgül sınırlayıcı kullanarak birleştirin.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Virgül sınırlayıcı ve CSV stili alıntılama özelliğini kullanarak iki sütunlu metni birleştirin.
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
