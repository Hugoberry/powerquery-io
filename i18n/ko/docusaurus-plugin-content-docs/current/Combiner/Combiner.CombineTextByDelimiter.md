---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

지정된 구분 기호를 사용하여 텍스트 목록을 결합하는 함수를 반환합니다.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

지정된 구분 기호를 사용하여 텍스트 값 목록을 단일 텍스트 값으로 결합하는 함수를 반환합니다.


## Examples

### Example #1 
세미콜론 구분 기호를 사용하여 텍스트 값 목록을 결합합니다.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
쉼표 구분 기호와 CSV 스타일 따옴표를 사용하여 두 열의 텍스트를 결합합니다.
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
