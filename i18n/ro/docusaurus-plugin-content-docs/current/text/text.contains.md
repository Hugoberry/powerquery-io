---
title: Text.Contains
---

# Text.Contains


Returnează dacă textul conţine un subşir.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Detectează dacă `text` conține valoarea `substring`. Returnează True dacă valoarea este găsită. Această funcție nu acceptă caractere wildcard sau expresii regulate.  
  
Argumentul opțional `comparer` poate fi utilizat pentru a specifica comparații sensibile la litere mari și mici sau la comparații receptive la setările regionale sau cele culturale. Următorii comparatori predefiniți sunt disponibili în limba formulei:

-   `Comparer.Ordinal`: utilizat pentru a efectua o comparație ordinală sensibilă la litere mari și mici
-   `Comparer.OrdinalIgnoreCase`: utilizat pentru a efectua o comparație ordinală care nu este sensibilă la litere mari și mici
-   `Comparer.FromCulture`: utilizat pentru a efectua o comparație receptivă la cultură

Dacă primul argument este nul, această funcție returnează nul.  
  
Toate caracterele sunt tratate ad litteram. De exemplu, „DR”, „ DR”, „DR ” și „ DR ” nu sunt considerate egale între ele.


## Examples

### Example #1
Aflaţi dacă textul „Hello World” conţine „Hello”.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Aflaţi dacă textul „Hello World” conţine „hello”.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Aflați dacă textul „Hello World” conține „hello”, utilizând o funcție de comparare care nu diferențiază între litere mari și mici.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Găsiți rândurile dintr-un tabel care conțin fie „A-”, fie „7” în codul contului.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
