---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Көрсетілген бөлгішті пайдаланып бір мәтінге біріктіретін функцияны қайтарады.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Көрсетілген бөлгішті пайдаланып мәтіндік мәндер тізімін бір мәтіндік мәнге біріктіретін функцияны қайтарады.


## Examples

### Example #1 
Нүктелі үтірді бөлгіш ретінде пайдалану арқылы мәтіндік мәндер тізімін біріктіріңіз.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Үтірлі бөлгішті және CSV мәнерлі дәйексөз арқылы екі бағанның мәтінін біріктіріңіз.
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
