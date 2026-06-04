---
title: Odbc.InferOptions
---

# Odbc.InferOptions


ODBC драйвері үшін SQL мүмкіндіктерін алу әрекетінің нәтижесін қайтарады.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

ODBC арқылы `connectionString` қосылым жолы бар SQL мүмкіндіктерін алу әрекетінің нәтижесін қайтарады. `connectionString` сипат мәні жұптарының мәтіні немесе жазбасы болу мүмкін. Сипат мәндері мәтін немесе сан болуы мүмкін.


## Examples

### Example #1
Байланыс жолы үшін берілген SQL мүмкіндіктерін қайтару.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
