---
title: Duration.FromText
---

# Duration.FromText


Επιστρέφει μια τιμή διάρκειας από μορφές κειμένου του χρόνου που πέρασε (η.ω:λ:δ).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Returns a duration value from the specified text, `text`. The following formats can be parsed by this function:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(All ranges are inclusive)

-   ddd: Number of days.
-   hh: Number of hours, between 0 and 23.
-   mm: Number of minutes, between 0 and 59.
-   ss: Number of seconds, between 0 and 59.
-   ff: Fraction of seconds, between 0 and 9999999.


## Examples

### Example #1
Μετατρέψτε την `"2.05:55:20"` σε μια τιμή `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
