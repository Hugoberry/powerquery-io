---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Επιστρέφει μια συνάρτηση που συνδυάζει μια λίστα κειμένου χρησιμοποιώντας τον καθορισμένο οριοθέτη.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Επιστρέφει μια συνάρτηση που συνδυάζει μια λίστα τιμών κειμένου σε μία τιμή κειμένου χρησιμοποιώντας τον καθορισμένο οριοθέτη.


## Examples

### Example #1 
Συνδυάστε μια λίστα τιμών κειμένου χρησιμοποιώντας έναν οριοθέτη ερωτηματικού.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Συνδυάστε το κείμενο δύο στηλών χρησιμοποιώντας έναν οριοθέτη με κόμματα και εισαγωγικά στυλ CSV.
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
