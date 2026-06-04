---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου σύμφωνα με τον καθορισμένο οριοθέτη.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type,
    optional csvStyle as CsvStyle.Type
) as function
```


## Remarks

Επιστρέφει μια συνάρτηση που διαιρεί κείμενο σε μια λίστα κειμένου σύμφωνα με τον καθορισμένο οριοθέτη.


## Examples

### Example #1
Διαχωρίστε την εισαγωγή με κόμμα, αγνοώντας τα εισαγωγικά κόμματα.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
