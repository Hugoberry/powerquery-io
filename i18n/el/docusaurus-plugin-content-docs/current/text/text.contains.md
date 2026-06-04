---
title: Text.Contains
---

# Text.Contains


Επιστρέφει αν το κείμενο περιέχει τη δευτερεύουσα συμβολοσειρά.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Detects whether `text` contains the value `substring`. Returns true if the value is found. This function doesn't support wildcards or regular expressions.  
  
The optional argument `comparer` can be used to specify case-insensitive or culture and locale-aware comparisons. The following built-in comparers are available in the formula language:

-   `Comparer.Ordinal`: Used to perform a case-sensitive ordinal comparison
-   `Comparer.OrdinalIgnoreCase`: Used to perform a case-insensitive ordinal comparison
-   `Comparer.FromCulture`: Used to perform a culture-aware comparison

If the first argument is null, this function returns null.  
  
All characters are treated literally. For example, "DR", " DR", "DR ", and " DR " aren't considered equal to each other.


## Examples

### Example #1
Βρείτε αν το κείμενο "Hello World" περιέχει τη λέξη "Hello".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Βρείτε αν το κείμενο "Hello World" περιέχει τη λέξη "hello".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Βρείτε αν το κείμενο "Hello World" περιέχει "hello", χρησιμοποιώντας σύγκριση χωρίς διάκριση πεζών-κεφαλαίων.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Βρείτε τις γραμμές σε έναν πίνακα που περιέχουν είτε "A-" είτε "7" στον κωδικό λογαριασμού.
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
